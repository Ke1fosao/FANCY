import { ImageResponse } from "next/og";

export const alt = "FÁNCY — дім краси у Рівному";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #171612 0%, #211d17 54%, #14130f 100%)",
          color: "#f7f1e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            display: "flex",
            width: 560,
            height: 560,
            border: "1px solid rgba(199, 169, 122, 0.34)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 78,
            bottom: -245,
            display: "flex",
            width: 520,
            height: 520,
            border: "1px solid rgba(199, 169, 122, 0.2)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            bottom: 24,
            left: 24,
            display: "flex",
            border: "1px solid rgba(218, 194, 157, 0.48)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "67%",
            height: "100%",
            padding: "66px 48px 54px 70px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c7a97a",
              }}
            >
              <div
                style={{
                  display: "flex",
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
                marginTop: 42,
                fontFamily: "serif",
                fontSize: 122,
                lineHeight: 0.88,
                letterSpacing: "-0.045em",
              }}
            >
              FÁNCY
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 610,
                marginTop: 30,
                fontFamily: "serif",
                fontSize: 43,
                lineHeight: 1.08,
                color: "#e8ddd0",
              }}
            >
              Краса, що звучить як ти.
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 610,
                marginTop: 30,
                fontSize: 19,
                lineHeight: 1.5,
                letterSpacing: "0.03em",
                color: "rgba(247, 241, 232, 0.7)",
              }}
            >
              Волосся · нігті · макіяж · брови та вії
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              paddingTop: 22,
              borderTop: "1px solid rgba(247, 241, 232, 0.17)",
              fontSize: 16,
              color: "rgba(247, 241, 232, 0.72)",
            }}
          >
            <div style={{ display: "flex" }}>Степана Бандери, 11</div>
            <div
              style={{
                display: "flex",
                width: 5,
                height: 5,
                margin: "0 18px",
                borderRadius: "50%",
                background: "#c7a97a",
              }}
            />
            <div style={{ display: "flex" }}>Щодня · 10:00–20:00</div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
            height: "100%",
            paddingRight: 42,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 300,
              height: 410,
              border: "1px solid rgba(218, 194, 157, 0.56)",
              borderRadius: "160px 160px 22px 22px",
              background:
                "linear-gradient(180deg, rgba(199, 169, 122, 0.2) 0%, rgba(199, 169, 122, 0.04) 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                left: 24,
                display: "flex",
                justifyContent: "center",
                paddingBottom: 18,
                borderBottom: "1px solid rgba(247, 241, 232, 0.16)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(247, 241, 232, 0.68)",
              }}
            >
              Beauty house
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 168,
                height: 168,
                border: "1px solid rgba(247, 241, 232, 0.26)",
                borderRadius: "50%",
                fontFamily: "serif",
                fontSize: 112,
                lineHeight: 1,
                color: "#d8c2a0",
              }}
            >
              F
            </div>

            <div
              style={{
                position: "absolute",
                right: 24,
                bottom: 24,
                left: 24,
                display: "flex",
                justifyContent: "center",
                padding: "13px 16px",
                border: "1px solid rgba(247, 241, 232, 0.3)",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#f7f1e8",
              }}
            >
              Онлайн-запис
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
