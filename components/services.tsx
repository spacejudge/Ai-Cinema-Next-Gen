"use client"

import { Star } from "lucide-react"
import { ServiceCard } from "./service-card"

const services = [
  { title: "Strategy & Consulting", tags: ["Brand Strategy", "Market Analysis", "Consulting"], href: "/services/strategy-consulting" },
  { title: "Creative Development", tags: ["Concepting", "Art Direction", "Copywriting"], href: "/services/creative-development" },
  { title: "Production Services", tags: ["Video", "Photography", "Motion Graphics"], href: "/services/production-services" },
  { title: "Brand Experience", tags: ["Activations", "Innovation", "Experience Design"], href: "/services/brand-experience" },
  { title: "Digital & Marketing", tags: ["Digital Strategy", "Marketing", "Analytics"], href: "https://v0-ai-cinema-next-chrou6559-wizboi545-2854s-projects.vercel.app/services/digital-marketing" },
]

export function Services() {
  return (
    <section className="bg-foreground min-h-screen py-12 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 mb-8 md:mb-12 lg:mb-16 flex items-end justify-between max-w-6xl">
        <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-7xl leading-[0.95] text-background uppercase font-black">Services</h2>
        <Star className="w-16 h-16 lg:w-20 lg:h-20 text-accent animate-pulse hidden md:block" fill="currentColor" />
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <ServiceCard key={i} number={`0${i + 1}`} title={s.title} tags={s.tags} href={s.href} />
        ))}
      </div>
    </section>
  )
}
