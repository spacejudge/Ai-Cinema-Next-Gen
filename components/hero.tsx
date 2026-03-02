"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative h-[100svh] bg-black overflow-hidden">
      {/* YouTube Video Background - Centered at Original Size */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <iframe
          className="w-auto h-auto max-w-full max-h-[100svh] aspect-video"
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

      {/* Text Overlay - Centered */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-4xl text-center"
        >
          <h1 className="font-sans text-[6.5vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw] leading-[1.1] font-black text-white text-balance">
            We create essence that scales through visual storytelling
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
