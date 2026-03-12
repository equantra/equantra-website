import React from "react";

const GlowEffect = () => {
  return (
    <div
      className="fixed inset-0 flex justify-center pointer-events-none z-[1] overflow-visible"
      aria-hidden
    >
      {/* Wrapper sized to the glow so blur can extend outside without being clipped */}
      <div
        className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl overflow-visible"
        style={{
          width: "600px",
          height: "600px",
          background:
            "rgba(152, 104, 248, 0.55)",
         opacity: "0.45",
         filter: "blur(100px)",
         pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default GlowEffect;