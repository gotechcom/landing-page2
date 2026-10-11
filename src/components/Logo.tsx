import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

// Hình mark khớp brand/svg/mark-color.svg — sửa nguồn ở brand/ rồi chép lại đây.
export default function Logo({ className = "", size = 40, showText = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GoTechCom logo"
      >
        <defs>
          <linearGradient
            id="gtGrad"
            x1="6"
            y1="2"
            x2="58"
            y2="62"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <path d="M32 2L58 16V48L32 62L6 48V16Z" fill="url(#gtGrad)" />
        <path d="M14 22H30V27H19V37H23V32H30V42H14Z" fill="#fff" />
        <path d="M34 22H50V27H44.5V42H39.5V27H34Z" fill="#fff" />
      </svg>

      {showText && (
        <span
          className="font-bold tracking-tight"
          style={{ fontSize: size * 0.5, color: "currentColor", lineHeight: 1 }}
        >
          GoTech<span style={{ opacity: 0.7 }}>Com</span>
        </span>
      )}
    </span>
  );
}
