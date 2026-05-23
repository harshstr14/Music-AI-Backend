import { groq } from "../config/ai.config.js"
import { parseJSON } from "../utils/jsonParser.js"

export async function getTopArtistsFromAI() {

    try {

        console.log("AI FUNCTION STARTED")

        const completion = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "user",
                    content: `
Return ONLY valid JSON array of 20 trending music artists.

Requirements:
- Include both Indian and global artists
- Include Bollywood, Punjabi, Pop, Hip-Hop, and international artists
- Only real currently trending artists
- No duplicate names
- No explanation
- No markdown
- JSON only

Example:
[
  "Arijit Singh",
  "Taylor Swift",
  "AP Dhillon",
  "Drake"
]
`             }
            ]
        })

        console.log("FULL RESPONSE:", completion)

        const text = completion.choices[0].message.content

        console.log("AI TEXT:", text)

        const parsed = parseJSON(text)

        console.log("PARSED:", parsed)

        return parsed

    } catch (e) {

        console.log("GROQ ERROR:", e)

        return []
    }
}

export async function getTopSongsFromAI() {

    try {

        const completion = await groq.chat.completions.create({

            model: "llama-3.3-70b-versatile",

            messages: [
                {
                    role: "system",
                    content: "You are a music recommendation system."
                },
                {
                    role: "user",
                    content: `
Return ONLY valid JSON array of 20 NEW and CURRENTLY TRENDING Bollywood songs in India in 2026.

IMPORTANT:
- Focus ONLY on songs released or viral recently
- Avoid old songs and classics
- Avoid songs older than 1 year unless currently viral
- Prioritize songs trending on Instagram Reels, YouTube Music India, Spotify India, and JioSaavn right now
- Include newly released Bollywood movie songs
- Include artist names with each song
- No duplicate songs
- No explanation
- No markdown
- JSON only

Example:
[
  "Aaj Ki Raat - Madhubanti Bagchi",
  "Sajni - Arijit Singh",
  "Dekha Tenu - Mohammad Faiz",
  "Naina - Diljit Dosanjh"
]
`            }
            ],

            temperature: 0.7
        })

        console.log("FULL RESPONSE:", completion)

        const text = completion.choices[0].message.content

        console.log("AI TEXT:", text)

        const parsed = parseJSON(text)

        console.log("PARSED:", parsed)

        return parsed
    } catch (e) {

        console.log("Groq Song Error:", e.message)

        return []
    }
}