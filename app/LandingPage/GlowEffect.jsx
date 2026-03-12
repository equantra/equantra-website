import React from "react";

const GlowEffect = ({
  className = "",
  glowClassName = "",
  insetClassName = "inset-0",
  position = "absolute",
  size = 600,
  top = "20%",
}) => {
  return (
    <div
      className={`${position} ${insetClassName} flex justify-center pointer-events-none overflow-visible ${className}`}
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      {/* Wrapper sized to the glow so blur can extend outside without being clipped */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl overflow-visible ${glowClassName}`}
        style={{
          top,
          width: `${size}px`,
          height: `${size}px`,
          background: "rgba(152, 104, 248, 0.55)",
          opacity: "0.45",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
};

export default GlowEffect;