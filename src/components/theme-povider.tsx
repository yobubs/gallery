"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { MoonIcon, SunIcon } from "lucide-react"
import { Button } from "./ui/button"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default function ThemeToggle({
  buttonVariant,
}: {
  buttonVariant: "outline" | "ghost"
}) {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant={buttonVariant}
      size="icon"
      onClick={() => setTheme(`${theme === "dark" ? "light" : "dark"}`)}
    >
      <SunIcon className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
