"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  number: string
  title: string
  tags: string[]
  href?: string
}

export function ServiceCard({ number, title, tags, href }: ServiceCardProps) {
  const content = (
    <div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6 max-w-6xl">
        <div className="font-serif text-accent text-base md:text-lg">({number})</div>
        <div className="flex-1">
          <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-background mb-2 md:mb-3 leading-[0.95] group-hover:translate-x-4 transition-transform duration-300">
            {title}
          </h3>
          <div className="flex gap-2 md:gap-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 md:px-3 md:py-1 border border-background/30 rounded-full text-background/60 font-serif text-xs md:text-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45">
          <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 text-accent" />
        </div>
      </div>
    </div>
  )

  if (href) {
    const isExternal = href.startsWith("http")
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="group border-t border-background/20 py-5 md:py-8 lg:py-10 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
            {content}
          </div>
        </a>
      )
    }
    return (
      <Link href={href}>
        <div className="group border-t border-background/20 py-5 md:py-8 lg:py-10 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
          {content}
        </div>
      </Link>
    )
  }

  return (
    <div className="group border-t border-background/20 py-5 md:py-8 lg:py-10 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
      {content}
    </div>
  )
}
