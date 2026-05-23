import { getTopArtistsFromAI } from "../services/ai.service.js"
import { searchArtist } from "../services/saavn.service.js"

export async function topArtists(req, res) {
    try {
        const artistNames = await getTopArtistsFromAI()

        if (!artistNames?.length) {
            return res.status(500).json({
                success: false,
                message: "AI failed"
            })
        }

        const results = await Promise.all(
            artistNames.map(searchArtist)
        )

        const response = {
            success: true,
            type: "top_artists",
            data: results.filter(Boolean)
        }

        res.json(response)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}