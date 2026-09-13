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

  const label = isLight ? "Switch to dark theme" : "Switch to light theme";

  return (
    <button
      className="relative grid size-[37px] cursor-pointer place-items-center rounded-full border border-[#303030] bg-transparent text-foreground [transition:transform_150ms_ease] hover:-translate-y-px hover:bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] hover:text-[#f3f3f3] active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-4 group-data-[theme=light]/theme:border-[#dedede] group-data-[theme=light]/theme:hover:text-[#171717] motion-reduce:[transition-duration:0.01ms] max-[600px]:size-8"
      type="button"
      onClick={toggleTheme}
      aria-pressed={isLight}
      aria-label={label}
      title={label}
      data-theme={isLight ? "light" : "dark"}
    >
      <span
        className={`absolute grid place-items-center [transition:opacity_100ms_ease,transform_150ms_ease] motion-reduce:[transition-duration:0.01ms] ${
          isLight
            ? "[transform:rotate(75deg)_scale(0.5)] opacity-0"
            : "[transform:rotate(0deg)_scale(1)] opacity-100"
        }`}
        aria-hidden="true"
      >
        <Sun size={19} strokeWidth={1.8} />
      </span>
      <span
        className={`absolute grid place-items-center [transition:opacity_100ms_ease,transform_150ms_ease] motion-reduce:[transition-duration:0.01ms] ${
          isLight
            ? "[transform:rotate(0deg)_scale(1)] opacity-100"
            : "[transform:rotate(-75deg)_scale(0.5)] opacity-0"
        }`}
        aria-hidden="true"
      >
        <Moon size={19} strokeWidth={1.8} />
      </span>
    </button>
  );
}
