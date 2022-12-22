import React, { useEffect, useState } from "react"

export const useThemeDetector = () => {
  const isBrowser = typeof window !== "undefined"
  const getCurrentTheme = () =>
    isBrowser && window.matchMedia("(prefers-color-scheme: dark)").matches
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme())
  const mqListener = e => {
    setIsDarkTheme(e.matches)
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
    darkThemeMq.addEventListener
      ? darkThemeMq.addEventListener("change", mqListener)
      : darkThemeMq.addListener(mqListener)

    return () =>
      darkThemeMq.removeEventListener
        ? darkThemeMq.removeEventListener("change", mqListener)
        : darkThemeMq.removeListener(mqListener)
  }, [])

  return isDarkTheme
}
