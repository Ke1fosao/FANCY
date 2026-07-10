"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)");
    if (!pointer.matches) return;

    const onMove = (event: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`;
      ref.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />;
}
