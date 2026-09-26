import React, { useEffect, useRef } from "react";

function MarqueeWrapper({ children, className = "" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animate = () => {
      const elementWidth = element.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;

      element.animate(
        [
          { transform: "translateX(0)" },
          { transform: `translateX(${windowWidth - elementWidth}px)` },
        ],
        {
          duration: 10000,
          easing: "linear",
          direction: "alternate",
          iterations: Infinity,
        },
      );
    };

    animate();
  }, []);

  return (
    <div className={`relative overflow-x-hidden ${className}`}>
      <div
        ref={elementRef}
        className="w-max whitespace-nowrap px-5 py-6 lg:px-7 lg:py-7"
      >
        {children}
      </div>
    </div>
  );
}

export default MarqueeWrapper;
