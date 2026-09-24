import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Isotipo "Llena" sobre Noche, ocupando 44% del cuadro (manual de marca, sección 01).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07132F",
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path
            d="M50 28 C50 36.49 58.51 50 72 50 C58.51 50 50 63.51 50 72 C50 63.51 41.49 50 28 50 C41.49 50 50 36.49 50 28 Z"
            fill="#C0843A"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
