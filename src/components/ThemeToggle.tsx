"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setDark(document.documentElement.dataset.theme === "dark");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("fancy-theme", next ? "dark" : "light");
  }

  return (
    <button
      className="icon-button theme-toggle"
      type="button"
      aria-label={dark ? "Увімкнути світлу тему" : "Увімкнути темну тему"}
      onClick={toggleTheme}
    >
      {dark ? <Sun size={17} strokeWidth={1.7} /> : <Moon size={17} strokeWidth={1.7} />}
    </button>
  );
}
