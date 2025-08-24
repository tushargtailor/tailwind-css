"use client";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemTheme(mediaQuery.matches ? "dark" : "light");

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const SWITCH_THEME = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
    }
  };

  return (
    <button
      onClick={SWITCH_THEME}
      className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800"
    >
      <IconSun className="absolute inset-0 m-auto size-4 shrink-0 scale-100 text-neutral-500 transition-all duration-300 dark:scale-0 dark:rotate-45" />
      <IconMoon className="absolute inset-0 m-auto size-4 shrink-0 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:text-neutral-200" />
    </button>
  );
};
