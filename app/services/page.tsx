"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactDropdown } from "@/components/contact-dropdown"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const services = [
  {
    number: "01",
    title: "Strategy & Consulting",
    tagline: "Where clarity becomes competitive advantage.",
    description:
      "We define positioning, sharpen messaging, and build strategic foundations that guide everything that follows.",
    capabilities: [
      "Brand Audit",
      "Market & Audience Research",
      "Positioning Systems",
      "Messaging Architecture",
      "Brand Guidelines",
      "Growth Roadmapping",
    ],
    cta: "Explore Strategy",
  },
  {
    number: "02",
    title: "Creative Development",
    tagline: "Ideas engineered to cut through.",
    description:
      "We develop bold, culture-aware creative systems built for modern platforms and real audiences.",
    capabilities: [
      "Concept Development",
      "Art Direction",
      "Copywriting",
      "Campaign Ideation",
      "Social-First Content",
      "Creative Systems",
    ],
    cta: "Explore Creative",
  },
  {
    number: "03",
    title: "Production Services",
    tagline: "From vision to execution — seamlessly delivered.",
    description:
      "We produce high-quality visual content engineered for impact across broadcast, digital, and social.",
    capabilities: [
      "TV Commercial Production",
      "Branded Video Content",
      "Brand Photography",
      "Motion Graphics",
      "Animatics",
      "Post-Production & Finishing",
      "Sound Design",
      "Color Grading",
    ],
    cta: "Explore Production",
  },
  {
    number: "04",
    title: "Brand Experience & Innovation",
    tagline: "Turning brands into living experiences.",
    description:
      "We design immersive brand ecosystems that connect physically and digitally.",
    capabilities: [
      "Experiential Design",
      "Brand Activations",
      "Digital Installations",
      "Innovation Strategy",
      "UX / Journey Design",
      "Campaign Experience Architecture",
    ],
    cta: "Explore Experience",
  },
  {
    number: "05",
    title: "Digital & Marketing Execution",
    tagline: "Performance meets precision.",
    description:
      "We build digital ecosystems that drive traffic, engagement, and measurable growth.",
    capabilities: [
      "Digital Strategy",
      "Social Media Systems",
      "Paid Media Campaigns",
      "Performance Marketing",
      "Marketing Automation",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    cta: "Explore Digital",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ServicesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-sans text-[12vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter">
            Our
            <br />
            <span className="text-accent">Services</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-foreground/70 mt-8 max-w-2xl text-base md:text-lg leading-relaxed"
        >
          Integrated capabilities built to move brands forward. We operate
          across strategy, creativity, production, and performance — delivering
          end-to-end solutions designed for growth.
        </motion.p>
      </section>

      {/* Service Blocks */}
      <section className="px-6 md:px-12 lg:px-16 pb-32">
        <div className="flex flex-col">
          {services.map((service, idx) => (
            <motion.div
              key={service.number}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative border-t-2 border-foreground/15 py-16 md:py-24"
            >
              {/* Large background number */}
              <span
                className="pointer-events-none absolute top-6 right-4 md:right-8 font-sans text-[20vw] md:text-[14vw] font-black leading-none text-foreground/[0.04] uppercase select-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              <div className="relative z-10 flex flex-col gap-8">
                {/* Number + Title */}
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-accent font-black">
                    {service.number} — {service.title.split(" ").slice(-1)[0] === "Consulting"
                      ? service.title.split("&")[0].trim()
                      : service.title.split(" ")[0]}
                  </span>
                  <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground leading-[0.95] text-balance">
                    {service.title}
                  </h2>
                </div>

                {/* Tagline + Description */}
                <div className="max-w-2xl flex flex-col gap-3">
                  <p className="font-sans text-base md:text-lg font-black text-foreground/90 italic">
                    {service.tagline}
                  </p>
                  <p className="font-serif text-sm md:text-base text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="flex flex-col gap-3 mt-2">
                  <h3 className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-foreground/40 font-black">
                    Capabilities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="font-serif text-xs px-4 py-2 border border-foreground/20 text-foreground/70 uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4">
                  <button className="group/cta inline-flex items-center gap-2 font-sans text-sm font-black uppercase tracking-wide text-foreground hover:text-accent transition-colors duration-300">
                    {service.cta}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final border */}
          <div className="border-t-2 border-foreground/15" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 lg:px-16 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-foreground py-20 md:py-28 px-8 md:px-16 flex flex-col items-center text-center"
        >
          <h2 className="font-sans text-[8vw] md:text-[5vw] font-black uppercase leading-[0.9] text-background text-balance">
            {"Let's Work on the Next Big Idea"}
          </h2>
          <p className="font-serif text-background/60 mt-6 max-w-lg text-sm md:text-base leading-relaxed">
            Strategy. Creativity. Production. Performance.
            <br />
            Everything working together.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="group/btn mt-10 inline-flex items-center gap-3 px-10 py-4 bg-accent text-white font-sans text-sm font-black uppercase tracking-wide hover:scale-105 hover:brightness-110 transition-all duration-300 rounded-full"
          >
            Start the Conversation
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </motion.div>
      </section>

      <Footer />
      <ContactDropdown
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  )
}
