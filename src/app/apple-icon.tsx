import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Isotipo "Llena" sobre Noche, para el ícono de home screen.
export default function AppleIcon() {
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
