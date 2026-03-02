import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grittyflint | Next-Gen Brand Experience Agency",
  description: "Brand experience agency blending creative brilliance with cutting-edge tech. Serving global powerhouses with 360 campaigns and innovative marketing solutions.",
  generator: "v0.app",
  icons: {
    icon: "/grittyflint-logo.png",
    apple: "/grittyflint-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
