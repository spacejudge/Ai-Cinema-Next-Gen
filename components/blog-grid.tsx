import type { PostListItem } from "@/lib/blog"
import { BlogPostCard } from "./blog-post-card"

interface BlogGridProps {
  posts: PostListItem[]
  columns?: 1 | 2 | 3
}

export function BlogGrid({
  posts,
  columns = 3,
}: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="font-serif text-foreground/50">No posts found.</p>
      </div>
    )
  }

  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }[columns]

  return (
    <div className={`grid ${gridColsClass} gap-6 md:gap-8`}>
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
