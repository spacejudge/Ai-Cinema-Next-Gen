"use client"

import { Marquee } from "./marquee"

export function MarqueeSection() {
  return (
    <section className="bg-foreground text-accent py-20 overflow-hidden -skew-y-2 origin-left">
      <Marquee text="STRATEGY • CREATIVE • BRAND •" direction={1} className="opacity-80" />
      <Marquee text="INNOVATION • PRODUCTION • EXECUTION •" direction={-1} className="text-background opacity-90" />
    </section>
  )
}
