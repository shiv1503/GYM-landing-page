import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0b0d",
          color: "#f5f7fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#84cc16" }} />
          <div style={{ fontSize: 20, letterSpacing: 4, color: "#84cc16", textTransform: "uppercase" }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 950 }}>{siteConfig.tagline}</div>
        <div style={{ fontSize: 26, color: "#9aa3af", marginTop: 22, maxWidth: 820 }}>{siteConfig.subheadline}</div>
      </div>
    ),
    { ...size }
  );
}
