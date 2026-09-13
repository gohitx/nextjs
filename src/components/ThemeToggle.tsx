"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  function toggleTheme() {
    const nextIsLight = !isLight;
    document.documentElement.dataset.theme = nextIsLight ? "light" : "dark";
    setIsLight(nextIsLight);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      data-theme={isLight ? "light" : "dark"}
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <Sun size={19} strokeWidth={1.8} />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <Moon size={19} strokeWidth={1.8} />
      </span>
    </button>
  );
}
