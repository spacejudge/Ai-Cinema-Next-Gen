"use client"

import { Menu, Twitter, Instagram, Linkedin, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState } from "react"
import { ContactDropdown } from "@/components/contact-dropdown"
import { AnimatePresence, motion } from "framer-motion"

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 bg-background">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/grittyflint-logo.png"
            alt="Grittyflint"
            width={40}
            height={40}
            className="h-10 w-auto"
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
                  : "bg-transparent text-background hover:bg-accent hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-6 py-2 rounded-full font-serif text-sm transition-colors uppercase bg-accent text-white hover:scale-105 hover:brightness-110"
          >
            {"Let's Work on the Next Big Idea"}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 bg-foreground text-background rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-foreground border-b border-foreground/20 md:hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-3 rounded-full font-serif text-sm transition-colors uppercase text-center ${
                    pathname === item.href
                      ? "bg-accent text-white"
                      : "bg-transparent text-background hover:bg-accent hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsContactOpen(true)
                }}
                className="px-6 py-3 rounded-full font-serif text-sm transition-colors uppercase bg-accent text-white hover:brightness-110 mt-2"
              >
                {"Let's Work on the Next Big Idea"}
              </button>
              <div className="flex justify-center gap-3 mt-4">
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
                    className="p-3 bg-background/10 text-background rounded-full hover:bg-accent hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Dropdown */}
      <ContactDropdown isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
