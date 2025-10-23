"use client";

import { useEffect } from "react";

export default function ThemeColorUpdater() {
  useEffect(() => {
    let meta = document.querySelector("meta[name='theme-color']");

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }

    const updateThemeColor = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);

      const startColor = [17, 24, 39];
      const endColor = [99, 102, 241];

      const newColor = startColor.map((c, i) =>
        Math.round(c + (endColor[i] - c) * progress)
      );

      const colorString = `rgb(${newColor.join(",")})`;
      meta!.setAttribute("content", colorString);
    };

    updateThemeColor();
    window.addEventListener("scroll", updateThemeColor);
    return () => window.removeEventListener("scroll", updateThemeColor);
  }, []);

  return null;
}
