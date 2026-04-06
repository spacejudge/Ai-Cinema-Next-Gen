import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { getPosts } from "@/lib/supabase/queries"

export const metadata = {
  title: "Blog | Grittyflint",
  description: "Stories, insights, and thoughts on design, culture, and strategy.",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-16 px-4 md:px-8">
        <h1 className="font-serif text-[11vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          Stories
          <br />
          <span className="text-primary">& Insights</span>
        </h1>
        <p className="font-mono text-muted-foreground mt-4 md:mt-8 max-w-xl text-sm md:text-base">
          Thoughts on design, strategy, culture, and the work that moves brands forward.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="px-4 md:px-8 pb-12 md:pb-24">
        <BlogGrid posts={posts} columns={3} />
      </section>

      <Footer />
    </main>
  )
}
