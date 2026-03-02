"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col justify-center overflow-hidden">
      {/* YouTube Video Background - Full Width */}
      <div className="absolute inset-0 w-screen h-full -left-[calc((100vw-100%)/2)]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/o7HUPX9Mi8k?autoplay=1&mute=1&loop=1&playlist=o7HUPX9Mi8k&controls=0&modestbranding=1"
          title="Grittyflint Hero Video"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            border: "none",
            pointerEvents: "none",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-4xl text-center"
        >
          <h1 className="font-heading text-[5vw] md:text-[4vw] lg:text-[3.5vw] leading-tight font-bold text-white">
            We create a world where essence scales through visual storytelling...
          </h1>
        </motion.div>
      </div>
    </section>
  )
}
