"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const heroSlides = [
  {
    image: "/brand-experience-hero-1.jpg",
    client: "Coca-Cola",
    campaign: "Thanks for Coke-Creating",
  },
  {
    image: "/brand-experience-hero-2.jpg",
    client: "BIC Brazil",
    campaign: "The Shakespeare's BIC",
  },
  {
    image: "/brand-experience-hero-3.jpg",
    client: "Wendy's",
    campaign: "Frosty Fix",
  },
]

const services = [
  {
    title: "Advertising",
    description:
      "We craft marketing communications that translate audience insight into powerful brand-to-market strategies. From awareness to action, we build campaigns that influence perception, drive demand, and deliver measurable business growth.",
    tagline: "Attention is earned. Conversion is engineered.",
  },
  {
    title: "Brand Strategy & Design",
    description:
      "We define enduring brand positioning and create distinctive visual identities that scale. Our approach balances long-term brand equity, immediate commercial opportunity, and cultural relevance.",
    tagline: "We build brands that win today — and remain relevant tomorrow.",
  },
  {
    title: "Social & Influencer",
    description:
      "We turn social presence into business performance. Through culturally intelligent strategy and creator partnerships, we build engagement, community, consideration, and measurable action.",
    tagline: "Social isn't noise. It's leverage.",
  },
  {
    title: "Sports, Experiential & Entertainment",
    description:
      "We create immersive brand worlds. From partnerships to live experiences, we design moments that spark emotional connection and amplify cultural visibility.",
    tagline: "We don't sponsor moments. We architect them.",
  },
  {
    title: "Content Marketing",
    description:
      "We create valuable, relevant content ecosystems that educate, inspire, and influence. Through owned platforms and storytelling systems, we turn information into trust — and trust into growth.",
    tagline: "",
  },
  {
    title: "Multicultural Marketing",
    description:
      "Culture drives conversion. Our multicultural approach ensures brands connect authentically with diverse audiences through insight-led strategy, inclusive creativity, and performance measurement.",
    tagline: "Relevance isn't optional. It's foundational.",
  },
]

const caseStudies = [
  {
    client: "Coca-Cola",
    campaign: "Thanks for Coke-Creating",
    description: "Embracing local creativity through iconic brand storytelling.",
  },
  {
    client: "BIC Brazil",
    campaign: "The Shakespeare's BIC",
    description: "Rewriting a timeless classic through cultural reinterpretation.",
  },
  {
    client: "Wendy's",
    campaign: "Frosty Fix",
    description: "Turning competitive tension into cultural conversation.",
  },
  {
    client: "Mondelez International",
    campaign: "Name This OREO",
    description: "An interactive digital experience that transformed product discovery into participation.",
  },
  {
    client: "Foundation to Combat Hate",
    campaign: "Timeout Against Hate",
    description: "Uniting communities through sports-driven advocacy and awareness.",
  },
]

export default function BrandExperiencePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.client} — ${slide.campaign}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-foreground/60" />

            <div className="absolute bottom-20 left-4 md:left-8">
              <p className="font-serif text-sm uppercase tracking-widest text-background/70 mb-2">{slide.client}</p>
              <h2 className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter text-background">
                {slide.campaign}
              </h2>
            </div>
          </div>
        ))}

        {/* Slide Controls */}
        <div className="absolute bottom-20 right-4 md:right-8 flex items-center gap-4 z-10">
          <button
            onClick={prevSlide}
            className="p-3 bg-background text-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="font-serif text-background text-sm">
            {currentSlide + 1} of {heroSlides.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-3 bg-background text-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === currentSlide ? "w-10 bg-accent" : "w-4 bg-background/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Brand Experience Overview */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl">
          <h1 className="font-sans text-[8vw] md:text-[6vw] leading-tight font-black uppercase tracking-tighter text-foreground mb-8">
            Brand Experience
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-6 font-bold">
            We don{"'"}t just build brands. We build desire.
          </p>
          <div className="max-w-3xl space-y-6">
            <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
              Brand Experience (BX) at Grittyflint is about creating meaningful emotional connections across categories,
              channels, and cultures.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
              We move beyond impressions and into impact. Beyond campaigns and into loyalty.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground font-bold">
              We don{"'"}t just create results. We create brand love.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-background">
            What We Do
          </h2>

          <div className="space-y-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-t border-background/20 last:border-b"
              >
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <h3 className="font-sans text-2xl md:text-4xl font-black uppercase tracking-tight text-background group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span
                    className={`font-sans text-3xl text-accent transition-transform duration-300 ${
                      expandedService === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === index ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="font-serif text-lg text-background/80 leading-relaxed max-w-3xl mb-4">
                    {service.description}
                  </p>
                  {service.tagline && (
                    <p className="font-serif text-lg text-accent font-bold italic">
                      {service.tagline}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Experience Work */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
            Brand Experience Work
          </h2>
          <p className="font-serif text-lg text-foreground/70 mb-16 max-w-2xl">
            A selection of campaigns that turned cultural intelligence into brand impact.
          </p>

          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="border-t border-foreground py-10 group hover:pl-4 transition-all duration-300 last:border-b"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="font-serif text-sm uppercase tracking-widest text-foreground/50 mb-2">
                      {study.client}
                    </p>
                    <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight text-foreground mb-2">
                      {study.campaign}
                    </h3>
                    <p className="font-serif text-lg text-foreground/70">
                      {study.description}
                    </p>
                  </div>
                  <span className="font-serif text-accent text-sm uppercase tracking-widest whitespace-nowrap group-hover:underline cursor-pointer">
                    Read Case Study &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/work"
              className="inline-block px-8 py-4 border-2 border-foreground text-foreground font-sans font-bold uppercase hover:bg-foreground hover:text-background transition-colors rounded"
            >
              See All Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tight text-background leading-tight text-balance">
            Brand Experience is not a department.
            <br />
            It{"'"}s a growth philosophy.
          </p>
          <div className="mt-12 space-y-4 font-serif text-lg text-background/80">
            <p>Culture builds relevance.</p>
            <p>Relevance builds desire.</p>
            <p className="text-accent font-bold text-xl">Desire builds growth.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-accent p-12 rounded-lg">
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase mb-6 text-accent-foreground">
            Ready to build brand desire?
          </h2>
          <p className="font-serif text-lg mb-8 text-accent-foreground/90">
            Let{"'"}s discuss how Grittyflint can create brand experiences that drive emotional connection and measurable growth.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-background text-foreground font-sans font-bold uppercase hover:bg-background/90 transition-colors rounded"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
