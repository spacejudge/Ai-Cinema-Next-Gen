"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, LogOut, Pencil, Trash2 } from "lucide-react"
import type { Post } from "@/lib/blog"

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/auth/login")
        return
      }

      setUser(user)
      fetchPosts()
    }

    checkAuth()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching posts:", error)
    } else {
      setPosts(data || [])
    }
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) {
      return
    }

    const { error } = await supabase.from("posts").delete().eq("id", id)

    if (error) {
      alert("Error deleting post: " + error.message)
    } else {
      setPosts(posts.filter((p) => p.id !== id))
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/10 sticky top-0 bg-background/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-sans text-2xl font-black uppercase">Admin Dashboard</h1>
            <p className="font-serif text-sm text-foreground/60 mt-1">Manage your blog posts</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-foreground/10 hover:bg-foreground/20 transition-colors rounded font-serif text-sm"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Create Button */}
        <div className="mb-8">
          <Link
            href="/admin/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-sans font-black uppercase rounded-lg hover:scale-105 transition-transform"
          >
            <Plus size={20} />
            New Post
          </Link>
        </div>

        {/* Posts Table */}
        {loading ? (
          <div className="text-center py-12">
            <p className="font-serif text-foreground/50">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 border border-foreground/10 rounded-lg">
            <p className="font-serif text-foreground/50 mb-4">No posts yet</p>
            <Link
              href="/admin/new"
              className="inline-block px-6 py-2 bg-foreground/10 hover:bg-foreground/20 transition-colors rounded font-serif text-sm"
            >
              Create your first post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto border border-foreground/10 rounded-lg">
            <table className="w-full">
              <thead className="bg-foreground/5 border-b border-foreground/10">
                <tr>
                  <th className="px-6 py-4 text-left font-sans font-black uppercase text-sm">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left font-sans font-black uppercase text-sm">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-sans font-black uppercase text-sm">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-sans font-black uppercase text-sm">
                    Date
                  </th>
                  <th className="px-6 py-4 text-right font-sans font-black uppercase text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-foreground/10 hover:bg-foreground/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-sans font-bold">{post.title}</p>
                      <p className="font-serif text-sm text-foreground/50">{post.slug}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-sans font-black uppercase rounded">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-sans font-black uppercase rounded ${
                          post.is_published
                            ? "bg-accent/10 text-accent"
                            : "bg-foreground/10 text-foreground/50"
                        }`}
                      >
                        {post.is_published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-serif text-sm text-foreground/60">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/edit/${post.id}`}
                          className="p-2 hover:bg-foreground/10 rounded transition-colors"
                          title="Edit"
                        >
                          <Pencil size={18} className="text-primary" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 hover:bg-foreground/10 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} className="text-accent" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
