"use client"

import { useState } from "react"
import { ContactDropdown } from "@/components/contact-dropdown"

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/grittyflint/" },
    { label: "Twitter", href: "https://x.com/grittyflint" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/grittyflint/" },
  ]

  return (
    <>
      <footer className="bg-accent pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="cursor-pointer hover:scale-105 transition-transform"
            >
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] font-black uppercase mb-4 md:mb-6 text-white text-balance">
                {"Let's Work on the Next Big Idea"}
              </h2>
            </button>
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 md:px-12 md:py-4 bg-white text-accent rounded-full font-serif text-sm md:text-xl uppercase hover:scale-105 transition-transform"
            >
              info@grittyflint.com
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-10 md:mt-14 lg:mt-16 border-t-2 border-white pt-5 md:pt-6 gap-4">
            <div className="font-serif font-bold uppercase text-sm text-white">
              &copy; 2026 Grittyflint
            </div>
            <div className="flex gap-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-bold uppercase text-sm hover:underline decoration-2 text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ContactDropdown isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
