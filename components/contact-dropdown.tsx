"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface ContactDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactDropdown({ isOpen, onClose }: ContactDropdownProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // spam protection
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // Honeypot check - if filled, silently "succeed"
    if (formData.honeypot) {
      setStatus("success")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "", honeypot: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const resetForm = () => {
    setStatus("idle")
    setErrors({})
    setFormData({ name: "", email: "", message: "", honeypot: "" })
  }

  const handleClose = () => {
    onClose()
    // Reset after animation completes
    setTimeout(() => {
      resetForm()
    }, 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Dropdown Panel */}
          <motion.div
            ref={dropdownRef}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 z-[70] bg-foreground text-background overflow-y-auto max-h-screen"
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
          >
            <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
              {/* Header */}
              <div className="flex items-start justify-between mb-8 md:mb-12">
                <div>
                  <h2 className="font-sans text-[8vw] md:text-[4vw] leading-none font-black uppercase text-background text-balance">
                    {"Let's Work on the Next Big Idea"}
                  </h2>
                  <p className="font-serif text-background/70 mt-4 max-w-lg text-sm md:text-base leading-relaxed">
                    Big ideas start with a conversation.
                    <br />
                    Tell us what you{"'"}re building — and let{"'"}s shape what{"'"}s next.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-colors flex-shrink-0 mt-2"
                  aria-label="Close contact form"
                >
                  <X size={24} className="text-background" />
                </button>
              </div>

              {/* Form / Status */}
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle size={48} className="text-accent mb-6" />
                  <h3 className="font-sans text-2xl md:text-3xl font-black uppercase text-background mb-3">
                    Thank You
                  </h3>
                  <p className="font-serif text-background/70 max-w-sm leading-relaxed">
                    Thank you. Our team will be in touch shortly.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 px-8 py-3 bg-accent text-white rounded-full font-serif text-sm uppercase hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <AlertCircle size={48} className="text-accent mb-6" />
                  <h3 className="font-sans text-2xl md:text-3xl font-black uppercase text-background mb-3">
                    Something Went Wrong
                  </h3>
                  <p className="font-serif text-background/70 max-w-sm leading-relaxed">
                    Something went wrong. Please try again.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-8 px-8 py-3 bg-accent text-white rounded-full font-serif text-sm uppercase hover:scale-105 transition-transform"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-8">
                  {/* Honeypot - hidden from real users */}
                  <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* Name */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-name" className="font-serif text-xs uppercase mb-2 text-background/60">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value })
                        if (errors.name) setErrors({ ...errors, name: "" })
                      }}
                      className="bg-transparent border-b-2 border-background/30 py-3 font-serif text-background focus:outline-none focus:border-accent transition-colors placeholder:text-background/30"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="text-accent text-xs font-serif mt-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-email" className="font-serif text-xs uppercase mb-2 text-background/60">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: "" })
                      }}
                      className="bg-transparent border-b-2 border-background/30 py-3 font-serif text-background focus:outline-none focus:border-accent transition-colors placeholder:text-background/30"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <span className="text-accent text-xs font-serif mt-1">{errors.email}</span>
                    )}
                  </div>

                  {/* Message - full width */}
                  <div className="flex flex-col md:col-span-2">
                    <label htmlFor="contact-message" className="font-serif text-xs uppercase mb-2 text-background/60">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value })
                        if (errors.message) setErrors({ ...errors, message: "" })
                      }}
                      rows={4}
                      className="bg-transparent border-2 border-background/30 p-4 font-serif text-background focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-background/30 rounded-lg"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <span className="text-accent text-xs font-serif mt-1">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-full font-serif text-sm uppercase hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
