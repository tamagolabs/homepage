import { ImageResponse } from "next/og";

export const alt =
  "tamagolabs - Desenvolvimento de Software, APIs, Mobile e SaaS";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#09090b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "80px",
        color: "#ffffff",
        fontFamily: "sans-serif",
        border: "8px solid #18181b",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #34d399, #0d9488)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#09090b",
            fontWeight: 900,
            fontSize: "28px",
          }}
        >
          t/
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
          }}
        >
          tamagolabs
        </div>
        <div
          style={{
            fontSize: "14px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            border: "1px solid rgba(52, 211, 153, 0.3)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginLeft: "16px",
          }}
        >
          Solo Software Studio
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: "54px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "1000px",
          }}
        >
          Engenharia de Software de Alta Performance
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            maxWidth: "880px",
            lineHeight: 1.4,
          }}
        >
          APIs Escaláveis • Apps Mobile com React Native • SaaS sob medida •
          100% Web Vitals
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid #27272a",
          paddingTop: "32px",
          fontSize: "18px",
          color: "#71717a",
        }}
      >
        <div>Desenvolvedor Full Stack Solo Sênior</div>
        <div style={{ color: "#34d399", fontWeight: 700 }}>tamagolabs.com</div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
