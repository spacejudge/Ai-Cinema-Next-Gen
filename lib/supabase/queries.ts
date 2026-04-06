import { createClient } from './server'
import type { Post, PostListItem } from '../blog'

export async function getPosts(limit?: number): Promise<PostListItem[]> {
  const supabase = createClient()

  let query = supabase
    .from('posts')
    .select(
      'id, title, slug, excerpt, category, author, featured_image, published_at, created_at, updated_at, is_published'
    )
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return (
    data?.map((post) => ({
      ...post,
      reading_time: Math.ceil(
        (post.excerpt?.split(' ').length || 100) / 200
      ),
    })) || []
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data || null
}

export async function getPostsByCategory(
  category: string,
  limit?: number
): Promise<PostListItem[]> {
  const supabase = createClient()

  let query = supabase
    .from('posts')
    .select(
      'id, title, slug, excerpt, category, author, featured_image, published_at, created_at, updated_at, is_published'
    )
    .eq('category', category)
    .eq('is_published', true)
    .order('published_at', { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }

  return (
    data?.map((post) => ({
      ...post,
      reading_time: Math.ceil(
        (post.excerpt?.split(' ').length || 100) / 200
      ),
    })) || []
  )
}
