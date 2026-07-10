import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const BookingSchema = z.object({
  name: z.string().trim().min(2, "Вкажіть імʼя").max(80),
  phone: z.string().trim().min(9, "Перевірте номер телефону").max(30),
  service: z.string().trim().min(2, "Оберіть послугу").max(120),
  date: z.string().trim().max(20).optional().default(""),
  time: z.string().trim().max(40).optional().default(""),
  comment: z.string().trim().max(600).optional().default(""),
  company: z.string().max(0).optional().default(""),
  consent: z.union([z.literal("true"), z.literal(true)]),
});

type RateEntry = { count: number; resetAt: number };
const globalStore = globalThis as typeof globalThis & { fancyRateLimit?: Map<string, RateEntry> };
const rateLimitStore = globalStore.fancyRateLimit ?? new Map<string, RateEntry>();
globalStore.fancyRateLimit = rateLimitStore;

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const maxRequests = 5;
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > maxRequests;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char] ?? char);
}

async function sendTelegram(data: z.infer<typeof BookingSchema>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;

  const text = [
    "<b>✨ Нова заявка FÁNCY</b>",
    "",
    `<b>Імʼя:</b> ${escapeHtml(data.name)}`,
    `<b>Телефон:</b> ${escapeHtml(data.phone)}`,
    `<b>Послуга:</b> ${escapeHtml(data.service)}`,
    `<b>Дата:</b> ${escapeHtml(data.date || "не вказано")}`,
    `<b>Час:</b> ${escapeHtml(data.time || "не вказано")}`,
    `<b>Коментар:</b> ${escapeHtml(data.comment || "—")}`,
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    signal: AbortSignal.timeout(7000),
  });

  return response.ok;
}

async function sendWebhook(data: z.infer<typeof BookingSchema>, request: NextRequest) {
  const url = process.env.BOOKING_WEBHOOK_URL;
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "fancy-website",
      createdAt: new Date().toISOString(),
      page: request.headers.get("referer") ?? "",
      ...data,
    }),
    signal: AbortSignal.timeout(7000),
  });

  return response.ok;
}

async function saveLocally(data: z.infer<typeof BookingSchema>, request: NextRequest) {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const record = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent") ?? "",
    ...data,
  };
  await appendFile(path.join(dir, "bookings.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "local";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Забагато спроб. Будь ласка, повторіть через кілька хвилин." },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const parsed = BookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: parsed.error.issues[0]?.message || "Перевірте заповнені поля." },
        { status: 400 },
      );
    }

    if (parsed.data.company) {
      return NextResponse.json({ ok: true, message: "Дякуємо! Заявку отримано." });
    }

    const deliveryResults = await Promise.allSettled([
      sendTelegram(parsed.data),
      sendWebhook(parsed.data, request),
      saveLocally(parsed.data, request),
    ]);

    const delivered = deliveryResults.some(
      (result) => result.status === "fulfilled" && result.value === true,
    );

    if (!delivered) {
      throw new Error("No delivery channel succeeded");
    }

    return NextResponse.json({
      ok: true,
      message: "Дякуємо! Адміністратор звʼяжеться з вами для підтвердження запису.",
    });
  } catch (error) {
    console.error("Booking API error", error);
    return NextResponse.json(
      { ok: false, message: "Не вдалося надіслати заявку. Зателефонуйте нам або напишіть у Direct." },
      { status: 500 },
    );
  }
}
