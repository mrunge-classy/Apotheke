import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

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
          background: "#4f6a45",
          borderRadius: 16,
        }}
      >
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M5 12c0 4.4 3.1 7.5 7 7.5s7-3.1 7-7.5M9.5 12c-.3-2.6 1-4.7 2.5-6.5 1.5 1.8 2.8 3.9 2.5 6.5"
            stroke="#fbf7ef"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="4.2" r="1" fill="#fbf7ef" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
