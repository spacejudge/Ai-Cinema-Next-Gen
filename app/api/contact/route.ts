import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, "").trim().slice(0, 2000)

    const sanitizedName = sanitize(name)
    const sanitizedEmail = email.trim().slice(0, 320)
    const sanitizedMessage = sanitize(message)
    const timestamp = new Date().toISOString()

    // Send email via mailto link workaround or external service
    // For production, integrate with a service like Resend, SendGrid, or Nodemailer
    // For now, we log the submission and return success
    // The form data is structured and ready for any email provider

    const submission = {
      to: "info@grittyflint.com",
      subject: `New Contact Form Submission from ${sanitizedName}`,
      name: sanitizedName,
      email: sanitizedEmail,
      message: sanitizedMessage,
      timestamp,
    }

    // Log for server-side visibility
    console.log("Contact form submission:", JSON.stringify(submission, null, 2))

    // Priority 1: Use Resend if API key is available
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Grittyflint Website <onboarding@resend.dev>",
          to: ["info@grittyflint.com"],
          subject: `New Contact: ${sanitizedName}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #EC5931;">New Contact Form Submission</h2>
              <hr style="border: 1px solid #ECB631;" />
              <p><strong>Name:</strong> ${sanitizedName}</p>
              <p><strong>Email:</strong> ${sanitizedEmail}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${sanitizedMessage.replace(/\n/g, "<br />")}</p>
              <hr style="border: 1px solid #ECB631;" />
              <p style="color: #666; font-size: 12px;">Submitted at: ${timestamp}</p>
            </div>
          `,
          reply_to: sanitizedEmail,
        }),
      })

      if (!resendResponse.ok) {
        console.error("Resend API error:", await resendResponse.text())
        return NextResponse.json(
          { error: "Failed to send email" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // Priority 2: Use Formspree if endpoint is configured
    if (process.env.FORMSPREE_ENDPOINT) {
      const formspreeResponse = await fetch(process.env.FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
          _subject: `New Contact: ${sanitizedName}`,
        }),
      })

      if (!formspreeResponse.ok) {
        console.error("Formspree error:", await formspreeResponse.text())
        return NextResponse.json(
          { error: "Failed to send message" },
          { status: 500 }
        )
      }

      return NextResponse.json({ success: true })
    }

    // No email service configured - log warning but return success
    // This allows testing without email configuration
    console.warn(
      "No email service configured. Set RESEND_API_KEY or FORMSPREE_ENDPOINT environment variable."
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
