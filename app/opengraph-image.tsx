import { ImageResponse } from "next/og";

export const alt = "Samuel Ohiani — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "70px 82px",
        background: "#09090c",
        color: "#f5f6f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
        <span>Samuel Ohiani</span>
        <span style={{ color: "#b8babd" }}>Software engineer</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
        <div
          style={{
            height: 230,
            width: 3,
            background: "#a82a39",
            boxShadow: "0 0 32px 8px #8c1825",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 89,
            lineHeight: 1.05,
            letterSpacing: -6,
          }}
        >
          <span>I build software</span>
          <span>for complex ideas.</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, color: "#b8babd" }}>
        <span>Full-stack products · backend systems · automations</span>
        <span>Lagos, Nigeria</span>
      </div>
    </div>,
    size,
  );
}
