import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPostBySlug, getPosts } from "@/lib/supabase/queries"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const posts = await getPosts(100)
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Grittyflint",
      description: "The post you are looking for does not exist.",
    }
  }

  return {
    title: `${post.title} | Grittyflint`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const publishedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  const readingTime = Math.ceil(post.content.split(" ").length / 200)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-20 md:pt-28 pb-8 md:pb-12 px-4 md:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-serif text-sm text-foreground/60 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] text-foreground max-w-4xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mt-8 border-t border-foreground/10 pt-6 text-sm">
          <span className="px-3 py-1 bg-primary/10 text-primary uppercase font-sans font-black tracking-widest">
            {post.category}
          </span>
          <div className="flex gap-6">
            <div>
              <p className="font-serif text-foreground/50">By</p>
              <p className="font-sans font-black">{post.author}</p>
            </div>
            <div>
              <p className="font-serif text-foreground/50">Published</p>
              <p className="font-sans font-black">{publishedDate}</p>
            </div>
            <div>
              <p className="font-serif text-foreground/50">Reading time</p>
              <p className="font-sans font-black">{readingTime} minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section className="px-4 md:px-8 pb-8 md:pb-12">
          <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden bg-foreground/5 rounded-lg">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Content */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div
              className="font-serif text-base md:text-lg leading-relaxed text-foreground/80 space-y-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
