"use client";

import { Check, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { serviceCategories } from "@/data/services";

type BookingFormProps = {
  initialService?: string;
  compact?: boolean;
  onSuccess?: () => void;
};

type Status = "idle" | "sending" | "success" | "error";

export function BookingForm({ initialService = "", compact = false, onSuccess }: BookingFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Не вдалося надіслати заявку.");
      }

      setStatus("success");
      setMessage(result.message || "Дякуємо! Ми звʼяжемося з вами для підтвердження запису.");
      form.reset();
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Сталася помилка. Спробуйте ще раз.");
    }
  }

  if (status === "success") {
    return (
      <div className="booking-success" role="status">
        <span className="success-icon"><Check size={24} /></span>
        <span className="eyebrow">Заявку отримано</span>
        <h3>До зустрічі у FÁNCY.</h3>
        <p>{message}</p>
        <button className="text-button" type="button" onClick={() => setStatus("idle")}>Створити ще одну заявку</button>
      </div>
    );
  }

  return (
    <form className={`booking-form ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      <div className="form-grid">
        <label className="field">
          <span>Ваше імʼя</span>
          <input name="name" type="text" placeholder="Наприклад, Анна" minLength={2} maxLength={80} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Телефон</span>
          <input name="phone" type="tel" placeholder="+38 (___) ___ __ __" minLength={9} maxLength={30} required autoComplete="tel" />
        </label>
        <label className="field field-wide">
          <span>Послуга</span>
          <select name="service" defaultValue={initialService} required>
            <option value="" disabled>Оберіть напрям</option>
            {serviceCategories.map((category) => (
              <option value={category.title} key={category.id}>{category.title}</option>
            ))}
            <option value="Потрібна консультація">Потрібна консультація</option>
          </select>
        </label>
        <label className="field">
          <span>Бажана дата</span>
          <input name="date" type="date" min={minDate} />
        </label>
        <label className="field">
          <span>Бажаний час</span>
          <select name="time" defaultValue="">
            <option value="">Будь-який</option>
            <option>10:00–12:00</option>
            <option>12:00–15:00</option>
            <option>15:00–18:00</option>
            <option>18:00–20:00</option>
          </select>
        </label>
        <label className="field field-wide">
          <span>Коментар</span>
          <textarea name="comment" placeholder="Розкажіть коротко про бажаний результат" maxLength={600} rows={compact ? 3 : 4} />
        </label>
      </div>

      <label className="honeypot" aria-hidden="true">
        Компанія
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent">
        <input name="consent" value="true" type="checkbox" required />
        <span>Погоджуюся на обробку контактних даних для підтвердження запису відповідно до <Link href="/privacy">політики конфіденційності</Link>.</span>
      </label>

      {status === "error" && <p className="form-error" role="alert">{message}</p>}

      <button className="button button-dark button-full submit-button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <><LoaderCircle className="spin" size={18} /> Надсилаємо…</> : "Надіслати заявку"}
      </button>
      <p className="form-caption">Заявка не є автоматичним підтвердженням. Адміністратор уточнить вільний час телефоном або в Direct.</p>
    </form>
  );
}
