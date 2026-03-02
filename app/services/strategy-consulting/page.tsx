"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    title: "Strategic Brainstorming Sessions",
    image: "/strategy-brainstorming.jpg",
  },
  {
    title: "Creative Collaboration Meetings",
    image: "/creative-collaboration.jpg",
  },
  {
    title: "Campaign Ideation Workshops",
    image: "/campaign-ideation.jpg",
  },
]

const strategicProcess = [
  {
    number: "01",
    title: "Discover",
    description:
      "We audit your brand, market positioning, competitors, and audience psychology.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We sharpen your brand narrative, clarify positioning, and identify growth opportunities.",
  },
  {
    number: "03",
    title: "Design Strategy",
    description:
      "We build creative roadmaps, campaign frameworks, and digital experience structures.",
  },
  {
    number: "04",
    title: "Deploy & Optimize",
    description:
      "Execution meets performance tracking — ensuring strategy translates into measurable results.",
  },
]

const deliverables = [
  "Brand Positioning Frameworks",
  "Creative Campaign Strategy",
  "Content Ecosystem Planning",
  "Digital Experience Strategy",
  "Cultural & Trend Intelligence",
  "Growth & Conversion Mapping",
]

export default function StrategyConsultingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-sans text-[12vw] md:text-[8vw] leading-tight font-black uppercase tracking-tighter mb-8">
            Strategy & Consulting
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground/90 mb-6">
            Where culture meets clarity. Where ideas become systems.
          </p>
          <p className="font-serif text-lg text-foreground/70 max-w-3xl leading-relaxed">
            We don't guess. We decode. At Grittyflint, strategy is not a document — it's a growth engine. We uncover brand truth, map cultural relevance, and design scalable creative systems that convert attention into measurable impact.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-4 md:px-8 py-20 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <Image
                src={carouselImages[currentImageIndex].image}
                alt={carouselImages[currentImageIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
              <p className="font-sans text-xl font-bold text-white">
                {carouselImages[currentImageIndex].title}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={prevImage}
                  className="p-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 bg-accent text-white rounded-full hover:bg-accent/80 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Image Counter */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 transition-all ${
                  index === currentImageIndex ? "w-8 bg-accent" : "w-2 bg-background/30"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Philosophy */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-6xl md:text-7xl font-black uppercase mb-12">
            Insight Before Execution. Always.
          </h2>
          <div className="space-y-6 font-serif text-lg text-foreground/70">
            <p>Every powerful campaign begins with understanding:</p>
            <ul className="space-y-4 list-none">
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold mt-1">•</span>
                <span>What your brand truly stands for</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Where culture is moving</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold mt-1">•</span>
                <span>What your audience actually values</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent font-bold mt-1">•</span>
                <span>How attention converts into growth</span>
              </li>
            </ul>
            <p className="pt-6">
              We bridge brand essence with market intelligence — crafting strategies that don't just look good, but perform.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-8 py-20 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-6xl md:text-7xl font-black uppercase mb-16">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {strategicProcess.map((step) => (
              <div key={step.number}>
                <span className="font-sans text-accent text-2xl font-black">
                  {step.number}
                </span>
                <h3 className="font-sans text-3xl font-black uppercase mt-4 mb-6">
                  {step.title}
                </h3>
                <p className="font-serif text-lg text-background/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-6xl md:text-7xl font-black uppercase mb-12">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {deliverables.map((item) => (
              <div
                key={item}
                className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
              >
                <p className="font-serif text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent p-12 rounded-lg">
            <p className="font-sans text-2xl md:text-3xl font-black text-white mb-4">
              We turn insight into influence.
            </p>
            <p className="font-sans text-xl md:text-2xl font-black text-white">
              And influence into revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-8 py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase leading-tight">
            Strategy without culture is noise.
            <br />
            Creativity without strategy is decoration.
            <br />
            <span className="text-accent">We build the bridge between both.</span>
          </h2>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-accent p-12 rounded-lg text-white">
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase mb-6">
            Ready to elevate your strategy?
          </h2>
          <p className="font-serif text-lg mb-8 text-white/90">
            Let's discuss how Grittyflint can help you build a strategy that drives real results.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-accent font-sans font-bold uppercase hover:bg-background hover:text-accent transition-colors rounded"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
