"use client"

import { Star } from "lucide-react"
import { ServiceCard } from "./service-card"

const services = [
  { title: "Strategy & Consulting", tags: ["Brand Strategy", "Market Analysis", "Consulting"], href: "/services/strategy-consulting" },
  { title: "Creative Development", tags: ["Concepting", "Art Direction", "Copywriting"], href: "/services/creative-development" },
  { title: "Production Services", tags: ["Video", "Photography", "Motion Graphics"], href: "/services/production-services" },
  { title: "Brand Experience", tags: ["Activations", "Innovation", "Experience Design"], href: "/services/brand-experience" },
  { title: "Digital & Marketing", tags: ["Digital Strategy", "Marketing", "Analytics"] },
]

export function Services() {
  return (
    <section className="bg-foreground min-h-screen py-32 relative">
      <div className="container mx-auto px-4 mb-20 flex items-end justify-between">
        <h2 className="font-sans text-[12vw] leading-none text-background uppercase font-black">Services</h2>
        <Star className="w-24 h-24 text-accent animate-pulse hidden md:block" fill="currentColor" />
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <ServiceCard key={i} number={`0${i + 1}`} title={s.title} tags={s.tags} href={s.href} />
        ))}
      </div>
    </section>
  )
}
