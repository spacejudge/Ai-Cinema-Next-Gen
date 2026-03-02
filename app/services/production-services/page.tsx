"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Film, Camera, Wand2, Scissors, Play } from "lucide-react"
import { useState } from "react"

const expertiseAreas = [
  {
    icon: Film,
    title: "Video Production",
    description:
      "Cinematic TV commercials, social-first campaigns, case study videos, and brand films designed to engage, inspire, and convert.",
  },
  {
    icon: Camera,
    title: "Brand Photography",
    description:
      "Visually striking photography that captures brand essence, product detail, and lifestyle narratives.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics & Animation",
    description:
      "Dynamic motion design, explainer videos, kinetic typography, and visual storytelling that amplifies your message.",
  },
  {
    icon: Scissors,
    title: "Post-Production",
    description:
      "Seamless editing, color grading, sound design, VFX, and final delivery \u2014 ensuring every project is polished and performance-ready.",
  },
]

const additionalServices = [
  "Corporate Videos",
  "Event Filming & Coverage",
  "Product Demonstrations",
  "Social Media Content",
  "Case Study Storytelling",
  "Drone / Aerial Cinematography",
  "360\u00B0 / VR Video Production",
  "Multi-Camera Shoots",
]

const showcaseVideos = [
  { id: "1125696312", title: "Production Reel 1" },
  { id: "1136124948", title: "Production Reel 2" },
  { id: "472914950", title: "Production Reel 3" },
  { id: "987010936", title: "Production Reel 4" },
  { id: "374782932", title: "Production Reel 5" },
  { id: "402129451", title: "Production Reel 6" },
]

function VideoEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative aspect-video bg-foreground/10 rounded-lg overflow-hidden group">
      {!isLoaded && (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center z-10 bg-foreground/90 hover:bg-foreground transition-colors cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 text-accent-foreground ml-1" fill="currentColor" />
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&controls=1`}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}
    </div>
  )
}

export default function ProductionServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl">
          <h1 className="font-sans text-[8vw] md:text-[6vw] leading-tight font-black uppercase tracking-tighter text-foreground mb-8">
            Production Services
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-6 font-bold">
            Where vision meets execution.
          </p>
          <p className="font-serif text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            At Grittyflint, production is more than filming — it{"'"}s crafting cinematic experiences. From initial
            shoot to seamless post-production, we bring stories to life with precision, creativity, and speed.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-background">
            Our Production Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {expertiseAreas.map((area) => (
              <div
                key={area.title}
                className="border-2 border-background/20 p-8 rounded-lg hover:border-accent transition-colors"
              >
                <area.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-sans text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-background">
                  {area.title}
                </h3>
                <p className="font-serif text-lg text-background/80 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-foreground">
            Full-Spectrum Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service) => (
              <div
                key={service}
                className="p-6 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors"
              >
                <p className="font-serif text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="px-4 md:px-8 py-24 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-background">
            Explore Our Work
          </h2>
          <p className="font-serif text-lg text-background/70 mb-16 max-w-2xl">
            A selection of cinematic productions crafted with precision, creativity, and purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseVideos.map((video) => (
              <VideoEmbed key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-4 md:px-8 py-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight text-balance">
            From concept to delivery, Grittyflint crafts productions that move people, elevate brands, and convert
            attention into results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto bg-accent p-12 rounded-lg">
          <h2 className="font-sans text-4xl md:text-5xl font-black uppercase mb-6 text-accent-foreground">
            Ready to bring your vision to life?
          </h2>
          <p className="font-serif text-lg mb-8 text-accent-foreground/90">
            Let{"'"}s discuss how Grittyflint can craft cinematic productions that elevate your brand.
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
