import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeSection } from "@/components/marquee-section"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { getPosts } from "@/lib/supabase/queries"
import Link from "next/link"

export default async function Page() {
  const latestPosts = await getPosts(3)

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <Services />

      {/* Latest Stories Section */}
      {latestPosts.length > 0 && (
        <section className="px-4 md:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12 md:mb-16 flex items-end justify-between">
              <div>
                <p className="font-serif text-primary text-sm md:text-base uppercase tracking-widest mb-4">
                  Latest Updates
                </p>
                <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95]">
                  Stories & Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 font-serif text-base hover:text-primary transition-colors"
              >
                View All →
              </Link>
            </div>

            {/* Grid */}
            <BlogGrid posts={latestPosts} columns={3} />

            {/* Mobile CTA */}
            <div className="flex md:hidden justify-center mt-10">
              <Link
                href="/blog"
                className="px-8 py-3 bg-foreground text-background font-sans font-black uppercase rounded-full hover:scale-105 transition-transform"
              >
                View All Stories
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
