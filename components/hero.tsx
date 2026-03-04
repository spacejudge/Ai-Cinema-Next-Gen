"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative h-[100dvh] md:h-screen bg-black overflow-hidden">
      {/* YouTube Video Background - Centered at True Aspect Ratio */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <iframe
          className="w-auto h-auto max-w-full max-h-[100dvh] md:max-h-screen aspect-video"
          src="https://www.youtube.com/embed/o7HUPX9Mi8k?autoplay=1&mute=1&loop=1&playlist=o7HUPX9Mi8k&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1"
          title="Grittyflint Hero Video"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
            pointerEvents: "none",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Text Overlay - Left Aligned */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-2xl text-left"
        >
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-black text-white text-balance">
            We create essence that scales through visual storytelling
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
