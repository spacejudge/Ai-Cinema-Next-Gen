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
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="font-serif text-accent text-xl">({number})</div>
        <div className="flex-1">
          <h3 className="font-sans text-6xl md:text-8xl font-bold uppercase text-background mb-4 group-hover:translate-x-4 transition-transform duration-300">
            {title}
          </h3>
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-background/30 rounded-full text-background/60 font-serif text-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45">
          <ArrowUpRight className="w-20 h-20 text-accent" />
        </div>
      </div>
    </div>
  )

  if (href) {
    const isExternal = href.startsWith("http")
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="group border-t border-background/20 py-12 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
            {content}
          </div>
        </a>
      )
    }
    return (
      <Link href={href}>
        <div className="group border-t border-background/20 py-12 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
          {content}
        </div>
      </Link>
    )
  }

  return (
    <div className="group border-t border-background/20 py-12 hover:bg-background/5 transition-colors duration-500 cursor-pointer">
      {content}
    </div>
  )
}
