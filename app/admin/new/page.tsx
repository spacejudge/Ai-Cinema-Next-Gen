"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Design",
    author: "",
    featured_image: "",
    is_published: false,
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/login")
      }
    }

    checkAuth()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")

      setFormData((prev) => ({
        ...prev,
        slug: slug,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert("Please login first")
      return
    }

    const { error } = await supabase.from("posts").insert([
      {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        author: formData.author || user.email,
        featured_image: formData.featured_image,
        is_published: formData.is_published,
        user_id: user.id,
      },
    ])

    if (error) {
      alert("Error creating post: " + error.message)
      setLoading(false)
    } else {
      router.push("/admin")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/10 sticky top-0 bg-background/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-6">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 font-serif text-sm text-foreground/60 hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
          <h1 className="font-sans text-2xl font-black uppercase">Create New Post</h1>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="Post title"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Slug *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="url-slug"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
            >
              <option>Design</option>
              <option>Strategy</option>
              <option>Culture</option>
              <option>Production</option>
              <option>Technology</option>
            </select>
          </div>

          {/* Featured Image URL */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Featured Image URL
            </label>
            <input
              type="url"
              name="featured_image"
              value={formData.featured_image}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="https://..."
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="Brief summary of the post"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block font-sans font-black uppercase text-sm mb-2">
              Content (HTML) *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              className="w-full px-4 py-3 bg-foreground/5 border border-foreground/10 rounded font-serif text-base focus:outline-none focus:border-primary"
              placeholder="Post content (supports HTML)"
            />
          </div>

          {/* Published */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="is_published"
              id="is_published"
              checked={formData.is_published}
              onChange={handleChange}
              className="w-5 h-5 cursor-pointer"
            />
            <label
              htmlFor="is_published"
              className="font-sans font-black uppercase text-sm cursor-pointer"
            >
              Publish immediately
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-8 border-t border-foreground/10">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-accent text-white font-sans font-black uppercase rounded-lg hover:scale-105 transition-transform disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
            <Link
              href="/admin"
              className="px-8 py-3 bg-foreground/10 font-sans font-black uppercase rounded-lg hover:bg-foreground/20 transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  )
}
