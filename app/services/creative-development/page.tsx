"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CreativeDevelopmentPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselImages = [
    { src: "/social-first-content.jpg", alt: "Social-First Content Creation" },
    { src: "/tv-commercial.jpg", alt: "TV Commercial Production" },
    { src: "/case-study-video.jpg", alt: "Case Study Video Production" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const processSteps = [
    {
      number: "01",
      title: "Concepting",
      description:
        "We uncover the core idea. Through research, insight, and cultural intelligence, we craft concepts that are bold, relevant, and scalable across platforms. We don't chase trends. We build ideas strong enough to become them.",
    },
    {
      number: "02",
      title: "Art Direction",
      description:
        "We design the visual language that defines the narrative. From mood boards to production design, cinematography, and digital aesthetics, every frame is intentional — aligned with brand essence and audience psychology. This is where strategy becomes visual power.",
    },
    {
      number: "03",
      title: "Copywriting",
      description:
        "Words shape perception. We develop messaging that is clear, persuasive, and culturally aware — from campaign headlines to scripts, brand manifestos, and digital micro-content. Every word has a role. Every line drives impact.",
    },
    {
      number: "04",
      title: "Production & Execution",
      description:
        "We bring it to life. Whether it's social-first content, TV commercials, case study video production, or buzz-worthy branded storytelling — we execute with precision, cinematic quality, and performance in mind.",
    },
  ]

  const workTypes = [
    {
      title: "Social-First Content",
      description: "Thumb-stopping, algorithm-aware storytelling built for digital velocity.",
    },
    {
      title: "TV Commercials",
      description: "Cinematic narratives that command attention and scale brand authority.",
    },
    {
      title: "Case Study Video Production",
      description: "Strategic storytelling that turns results into proof and proof into trust.",
    },
    {
      title: "Buzz-Worthy Stories",
      description: "Culturally relevant ideas engineered to spark conversation and visibility.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl">
          <h1 className="font-sans text-[8vw] md:text-[6vw] leading-tight font-black uppercase tracking-tighter text-foreground mb-8">
            Creative Development
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-6 font-bold">
            Where ideas evolve into influence.
          </p>
          <p className="font-serif text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            At Grittyflint, creative isn't decoration — it's direction. We build culturally sharp, strategically
            grounded work that captures attention and converts it into action. From the first spark of an idea to final
            execution, we develop stories designed to move people — and markets.
          </p>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="px-4 md:px-8 py-20 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-video bg-background rounded-lg overflow-hidden mb-8">
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="p-3 bg-background text-foreground rounded-full hover:bg-background/80 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentSlide ? "bg-accent" : "bg-background/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-background text-foreground rounded-full hover:bg-background/80 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <p className="text-center font-serif text-background/80 text-sm mt-6 uppercase tracking-widest">
            {carouselImages[currentSlide].alt}
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-foreground">
            Our Creative Process
          </h2>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.number} className="border-t border-foreground pt-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <span className="font-sans text-accent text-4xl font-black">{step.number}</span>
                    <h3 className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tight mt-4 text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="font-serif text-lg text-foreground/80 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Create Section */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-background">
            What We Create
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workTypes.map((work, index) => (
              <div
                key={index}
                className="border-2 border-background p-8 rounded-lg hover:bg-background/10 transition-colors"
              >
                <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-background">
                  {work.title}
                </h3>
                <p className="font-serif text-lg text-background/80">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight">
            Creativity without structure fades.
            <br />
            Structure without creativity feels empty.
            <br />
            <span className="text-accent">At Grittyflint, we build both.</span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
