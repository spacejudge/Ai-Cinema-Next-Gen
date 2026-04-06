export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  featured_image?: string
  published_at: string
  created_at: string
  updated_at: string
  is_published: boolean
}

export interface PostListItem extends Omit<Post, 'content'> {
  reading_time: number
}
