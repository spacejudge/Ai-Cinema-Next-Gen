"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const heroSlides = [
  {
    image: "/digital-marketing-hero-1.jpg",
    label: "Digital Strategy",
    headline: "Architect Growth",
  },
  {
    image: "/digital-marketing-hero-2.jpg",
    label: "Marketing Innovation",
    headline: "Engineer Demand",
  },
  {
    image: "/digital-marketing-hero-3.jpg",
    label: "Data & Analytics",
    headline: "Decode Performance",
  },
  {
    image: "/digital-marketing-hero-4.jpg",
    label: "Performance Growth",
    headline: "Scale Results",
  },
  {
    image: "/digital-marketing-hero-5.jpg",
    label: "AI & Transformation",
    headline: "Build the Future",
  },
]

const offerings = [
  {
    title: "Digital Strategy",
    description:
      "We architect digital ecosystems aligned to business objectives. From audience mapping and funnel design to channel orchestration and platform selection, we create scalable frameworks that power long-term growth.",
    tagline: "Strategy first. Execution always.",
  },
  {
    title: "Performance Marketing",
    description:
      "We build high-impact campaigns that blend creative precision with media intelligence. Across paid media, search, social, and programmatic, we optimize for awareness, engagement, conversion, and retention.",
    tagline: "Performance isn't guesswork. It's engineered.",
    bullets: ["Awareness", "Engagement", "Conversion", "Retention"],
  },
  {
    title: "Analytics & Data Intelligence",
    description:
      "Data without direction is noise. We transform data into actionable intelligence \u2014 measuring the full customer journey and unlocking insights that inform optimization, personalization, and scale.",
    tagline: "",
    bullets: [
      "Attribution modeling",
      "Conversion rate optimization",
      "Customer journey analytics",
      "Campaign performance measurement",
    ],
  },
  {
    title: "Marketing Automation & CRM",
    description:
      "We design automated systems that nurture audiences and increase lifetime value. Through CRM integration, email flows, and lifecycle marketing, we turn interest into loyalty.",
    tagline: "Always-on growth.",
  },
  {
    title: "AI & Digital Transformation",
    description:
      "We help brands integrate AI-driven tools and smart technologies that enhance personalization, forecasting, and operational efficiency.",
    tagline: "Transformation is not about adopting trends. It's about building future-ready infrastructure.",
  },
  {
    title: "Omnichannel Campaign Systems",
    description:
      "We unify paid, owned, and earned media across platforms \u2014 ensuring consistency, efficiency, and impact. From social to web to marketplaces, we create seamless brand experiences across the entire customer journey.",
    tagline: "",
  },
  {
    title: "Content & Growth Operations",
    description:
      "We build scalable content engines and growth operations that fuel demand generation, brand authority, and audience development. From editorial strategy to production workflows, we create systems that compound over time.",
    tagline: "Content without infrastructure is noise. We build the machine.",
  },
]

const caseStudies = [
  {
    client: "Client Name",
    campaign: "Campaign Title",
    description: "Driving measurable growth through integrated digital strategy.",
  },
  {
    client: "Client Name",
    campaign: "Campaign Title",
    description: "Transforming engagement into scalable conversion.",
  },
  {
    client: "Client Name",
    campaign: "Campaign Title",
    description: "Leveraging performance media to unlock incremental growth.",
  },
  {
    client: "Client Name",
    campaign: "Campaign Title",
    description: "Building intelligent systems for long-term digital advantage.",
  },
]

export default function DigitalMarketingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedOffering, setExpandedOffering] = useState<number | null>(null)

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
              alt={`${slide.label} \u2014 ${slide.headline}`}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-foreground/60" />

            <div className="absolute bottom-20 left-4 md:left-8">
              <p className="font-serif text-sm uppercase tracking-widest text-background/70 mb-2">{slide.label}</p>
              <h2 className="font-sans text-4xl md:text-6xl font-black uppercase tracking-tighter text-background">
                {slide.headline}
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

      {/* Overview Section */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl">
          <h1 className="font-sans text-[8vw] md:text-[6vw] leading-tight font-black uppercase tracking-tighter text-foreground mb-8">
            Digital & Marketing
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-6 font-bold">Growth Engineered.</p>
          <div className="max-w-3xl space-y-6">
            <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
              Digital is no longer a channel. It is the infrastructure of modern brand growth.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground/80 leading-relaxed">
              At Grittyflint, we build integrated digital ecosystems where strategy, creativity, data, and technology
              converge to drive measurable business outcomes.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground font-bold">
              We don{"'"}t just generate traffic. We design systems that convert it.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-background">
            Our Digital & Marketing Capabilities
          </h2>

          <div className="space-y-0">
            {offerings.map((offering, index) => (
              <div key={index} className="border-t border-background/20 last:border-b">
                <button
                  onClick={() => setExpandedOffering(expandedOffering === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group cursor-pointer"
                >
                  <h3 className="font-sans text-2xl md:text-4xl font-black uppercase tracking-tight text-background group-hover:text-accent transition-colors">
                    {offering.title}
                  </h3>
                  <span className="flex items-center gap-2">
                    <span className="font-serif text-sm uppercase tracking-widest text-accent hidden md:inline">
                      {expandedOffering === index ? "Close" : "Learn More"}
                    </span>
                    <span
                      className={`font-sans text-3xl text-accent transition-transform duration-300 ${
                        expandedOffering === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedOffering === index ? "max-h-[500px] pb-8" : "max-h-0"
                  }`}
                >
                  <p className="font-serif text-lg text-background/80 leading-relaxed max-w-3xl mb-4">
                    {offering.description}
                  </p>
                  {offering.bullets && (
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      {offering.bullets.map((bullet, i) => (
                        <li key={i} className="font-serif text-background/70">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {offering.tagline && (
                    <p className="font-serif text-lg text-accent font-bold italic">{offering.tagline}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital & Marketing Work */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
            Digital & Marketing Work
          </h2>
          <p className="font-serif text-lg text-foreground/70 mb-16 max-w-2xl">
            Campaigns engineered for measurable growth across digital ecosystems.
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
                    <p className="font-serif text-lg text-foreground/70">{study.description}</p>
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
            Digital & Marketing isn{"'"}t a service.
            <br />
            It{"'"}s a growth architecture.
          </p>
          <div className="mt-12 space-y-4 font-serif text-lg text-background/80">
            <p>Marketing drives attention.</p>
            <p>Digital drives infrastructure.</p>
            <p className="text-accent font-bold text-xl">Data drives decisions.</p>
          </div>
          <p className="mt-8 font-serif text-xl text-background font-bold">We connect all three.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-accent p-12 rounded-lg">
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase mb-6 text-accent-foreground">
            Ready to engineer growth?
          </h2>
          <p className="font-serif text-lg mb-8 text-accent-foreground/90">
            Let{"'"}s discuss how Grittyflint can build the digital infrastructure that drives measurable business
            outcomes.
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
