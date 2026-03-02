"use client"

import { Menu, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-background">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/grittyflint-logo.png"
          alt="Grittyflint"
          width={40}
          height={40}
          className="h-10"
          style={{ width: "auto", height: "auto" }}
        />
        <span className="font-sans text-xl font-bold uppercase tracking-tight text-foreground hidden sm:inline">
          Grittyflint
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-4 bg-foreground p-2 rounded-full backdrop-blur-sm border border-foreground">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`px-6 py-2 rounded-full font-serif text-sm transition-colors uppercase ${
              pathname === item.href
                ? "bg-accent text-white"
                : "bg-transparent text-foreground hover:bg-accent hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="md:hidden p-2 bg-foreground text-background rounded-full">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex gap-2">
          {[
            { icon: Twitter, href: "https://x.com/grittyflint" },
            { icon: Instagram, href: "https://www.instagram.com/grittyflint/" },
            { icon: Linkedin, href: "https://www.linkedin.com/company/grittyflint/" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-foreground text-background rounded-full hover:bg-accent hover:text-white transition-colors border border-foreground"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
