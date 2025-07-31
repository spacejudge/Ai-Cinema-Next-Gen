import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { input } = req.body;
  if (!input) return res.status(400).json({ error: "Missing input" });

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You're an expert filmmaker. Convert rough scene outlines into cinematic prompts with proper technical language: lens, camera movement, mood, tone, lighting, etc.",
        },
        {
          role: "user",
          content: input,
        },
      ],
      temperature: 0.7,
    });

    const prompt = chatResponse.choices[0]?.message?.content ?? "No result.";
    res.status(200).json({ prompt });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Internal error." });
  }
}