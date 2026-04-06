import Link from "next/link"
import type { PostListItem } from "@/lib/blog"

interface BlogPostCardProps {
  post: PostListItem
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const publishedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group border border-foreground/10 hover:border-foreground/30 transition-colors duration-300 overflow-hidden h-full flex flex-col">
        {/* Featured Image */}
        {post.featured_image && (
          <div className="relative h-48 md:h-56 overflow-hidden bg-foreground/5">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 md:p-6 flex-1 flex flex-col gap-3">
          {/* Category & Date */}
          <div className="flex items-center justify-between gap-4 text-xs md:text-sm">
            <span className="px-3 py-1 bg-accent/10 text-accent uppercase font-sans font-black tracking-widest">
              {post.category}
            </span>
            <time className="font-serif text-foreground/50">
              {publishedDate}
            </time>
          </div>

          {/* Title */}
          <h3 className="font-sans text-lg md:text-xl font-black uppercase leading-tight text-foreground group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-serif text-sm md:text-base text-foreground/70 leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-2 border-t border-foreground/10 text-xs md:text-sm">
            <span className="font-serif text-foreground/50">{post.author}</span>
            <span className="font-serif text-foreground/50">
              {post.reading_time} min read
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
