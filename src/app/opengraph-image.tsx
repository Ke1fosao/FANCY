import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "FÁNCY — дім краси у Рівному";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const interiorImage = await readFile(
    join(process.cwd(), "public/images/interior.jpg"),
  );
  const interiorImageSource = Uint8Array.from(interiorImage).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#171612",
          color: "#f7f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
            display: "flex",
            border: "1px solid rgba(218, 194, 157, 0.48)",
            zIndex: 10,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "58%",
            height: "100%",
            padding: "68px 58px 56px 68px",
            background:
              "radial-gradient(circle at 5% 5%, rgba(199, 169, 122, 0.24), transparent 35%), #171612",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#c7a97a",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 1,
                  marginRight: 16,
                  background: "#c7a97a",
                }}
              />
              Дім краси · Рівне
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 46,
                fontFamily: "serif",
                fontSize: 116,
                lineHeight: 0.86,
                letterSpacing: "-0.045em",
                color: "#f7f1e8",
              }}
            >
              FÁNCY
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 530,
                marginTop: 28,
                fontFamily: "serif",
                fontSize: 42,
                lineHeight: 1.08,
                color: "#e8ddd0",
              }}
            >
              Краса, що звучить як ти.
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 510,
                marginTop: 28,
                fontSize: 20,
                lineHeight: 1.5,
                color: "rgba(247, 241, 232, 0.72)",
              }}
            >
              Волосся · нігті · макіяж · брови та вії
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: 22,
              borderTop: "1px solid rgba(247, 241, 232, 0.18)",
              fontSize: 16,
              color: "rgba(247, 241, 232, 0.72)",
            }}
          >
            <div style={{ display: "flex" }}>Степана Бандери, 11</div>
            <div style={{ display: "flex" }}>Щодня · 10:00–20:00</div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "42%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* @ts-expect-error Satori supports ArrayBuffer image sources at runtime */}
          <img
            src={interiorImageSource}
            alt=""
            width={504}
            height={630}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: "flex",
              background:
                "linear-gradient(90deg, rgba(23, 22, 18, 0.72) 0%, rgba(23, 22, 18, 0.08) 48%, rgba(23, 22, 18, 0.18) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 52,
              bottom: 54,
              display: "flex",
              alignItems: "center",
              padding: "14px 20px",
              border: "1px solid rgba(255, 255, 255, 0.62)",
              background: "rgba(23, 22, 18, 0.58)",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Онлайн-запис
          </div>
        </div>
      </div>
    ),
    size,
  );
}
