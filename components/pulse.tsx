import React from "react";

const PulsingBackground = () => {
  return (
    <div className="absolute top-0 z-[-1] left-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Radial gradient mask */}
        <div
          className="absolute inset-0 bg-gradient-to-r z-[1] animate-pulse-subtle from-transparent to-white mix-blend-overlay"
          //   style={{
          //     backgroundImage:
          //       "radial-gradient(42.61% 56.98% at 51.03% 54.56%, rgba(255, 255, 255, 0) 0%, #FFF 100%)",
          //     maskImage:
          //       "radial-gradient(42.61% 56.98% at 51.03% 54.56%, rgba(255, 255, 255, 0) 0%, #FFF 1000%)",
          //   }}
          style={{
            backgroundImage:
              "radial-gradient(42.61% 56.98% at 51.03% 54.56%,#FFF 40%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 80%, #FFF 90%, rgba(255, 255, 255, 1) 100%)",
            maskImage:
              "radial-gradient(42.61% 56.98% at 51.03% 54.56%, #FFF 40%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 80%, #FFF 90%, rgba(255, 255, 255, 1) 100%)",
          }}
        ></div>

        {/* Repeating orange grid background */}
        <div className="absolute inset-0 z-[0] bg-white grid-bg"></div>
      </div>
    </div>
  );
};

// // Custom animation for subtle pulsing
// const pulseAnimation = `
//   @keyframes pulse-subtle {
//     0%, 100% { opacity: 1; transform: scale(1); }
//     50% { opacity: 0.95; transform: scale(1.01); }
//   }
// `;

export default PulsingBackground;
