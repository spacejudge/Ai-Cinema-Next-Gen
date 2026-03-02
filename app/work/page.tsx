"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    index: "01",
    title: "Cultural Impact Film",
    category: "Film",
    year: "2024",
    description:
      "High-impact brand storytelling crafted for broadcast, digital, and cultural relevance.",
    image: "/work/cultural-impact-film.jpg",
  },
  {
    id: 2,
    index: "02",
    title: "Launch Campaign System",
    category: "Campaign",
    year: "2024",
    description:
      "A multi-platform campaign blending film, social-first content, and performance assets.",
    image: "/work/launch-campaign-system.jpg",
  },
  {
    id: 3,
    index: "03",
    title: "Brand Motion Toolkit",
    category: "Motion",
    year: "2023",
    description:
      "A scalable motion system built for digital, broadcast, and branded experiences.",
    image: "/work/brand-motion-toolkit.jpg",
  },
  {
    id: 4,
    index: "04",
    title: "Product Reveal Film",
    category: "Film",
    year: "2023",
    description:
      "Cinematic product storytelling engineered for attention and conversion.",
    image: "/work/product-reveal-film.jpg",
  },
  {
    id: 5,
    index: "05",
    title: "Creative Banner System",
    category: "Design System",
    year: "2023",
    description:
      "High-performance visual assets optimized for omnichannel deployment.",
    image: "/work/creative-banner-system.jpg",
  },
  {
    id: 6,
    index: "06",
    title: "Strategic Animatic Series",
    category: "Concept",
    year: "2022",
    description:
      "Pre-visual storytelling that shapes narrative direction before full-scale production.",
    image: "/work/strategic-animatic-series.jpg",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const tileVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-10 md:pb-20 px-4 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-sans text-[11vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter">
            Selected
            <br />
            <span className="text-accent">Work</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-foreground/70 mt-4 md:mt-8 max-w-2xl text-sm md:text-lg leading-relaxed"
        >
          A curated body of work spanning film, motion, design systems, and
          culture-shaping campaigns. Each project reflects our commitment to
          bold storytelling and measurable impact.
        </motion.p>
      </section>

      {/* Project Grid */}
      <section className="px-4 md:px-12 lg:px-16 pb-16 md:pb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={tileVariants}
              className="group relative flex flex-col bg-foreground overflow-hidden cursor-pointer"
              style={{ willChange: "transform" }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />

                {/* Category pill */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                  <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 font-sans text-[9px] md:text-[10px] uppercase tracking-widest bg-background text-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Hover description */}
                <div className="absolute inset-0 z-10 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-serif text-sm text-white/90 leading-relaxed max-w-xs">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Info bar */}
              <div className="flex items-center justify-between px-3 py-3 md:px-5 md:py-4 bg-foreground">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-sans text-xs md:text-base font-black uppercase text-background tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <span className="font-serif text-xs text-background/50 uppercase tracking-wide">
                    {project.category} — {project.year}
                  </span>
                </div>
                <span className="font-sans text-xl md:text-3xl font-black text-background/20 leading-none">
                  {project.index}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
