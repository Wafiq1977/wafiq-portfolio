"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={`no-tap focus-ring grid h-9 w-9 place-items-center rounded-full hairline text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground ${className ?? ""}`}
    >
      {/* Icon visibility is driven purely by the .dark class on <html>
          so there's no hydration mismatch and no mounted state needed.
          Shown icon reflects the current theme (Moon = dark, Sun = light). */}
      <Moon className="hidden h-[15px] w-[15px] dark:block" strokeWidth={2} />
      <Sun className="h-[15px] w-[15px] dark:hidden" strokeWidth={2} />
    </button>
  );
}
