"use client"

export function Footer() {
  const socials = [
    { label: "Instagram", href: "https://www.instagram.com/grittyflint/" },
    { label: "Twitter", href: "https://x.com/grittyflint" },
    { label: "Linkedin", href: "https://www.linkedin.com/company/grittyflint/" },
  ]

  return (
    <footer className="bg-accent pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-sans text-[10vw] leading-none font-black uppercase mb-8 text-white">{"Let's Talk"}</h2>
          <button className="px-12 py-4 bg-white text-accent rounded-full font-serif text-xl uppercase hover:scale-105 transition-transform">
            info@grittyflint.com
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-20 border-t-2 border-white pt-8 gap-4">
          <div className="font-serif font-bold uppercase text-sm text-white">© 2026 Grittyflint</div>
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
  )
}
