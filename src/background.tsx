import React from "react"
import { createRoot } from "react-dom/client"
import RibbonGlow from "./RibbonGlow"

// Mounts the Ribbon Glow component (unchanged) as the fixed site background.
// Colours are passed as props to match the ZIZI palette; remove them to use the Originkit preset.
const el = document.getElementById("ribbon-bg")
if (el) {
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  createRoot(el).render(
    <RibbonGlow
      background="#1E2A1E"
      color1="#A67C52"
      color2="#3F7A4D"
      speed={still ? 0 : 50}
      style={{ minWidth: 0, minHeight: 0, pointerEvents: "none" }}
    />
  )
}
