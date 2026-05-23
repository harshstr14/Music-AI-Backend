import { getTopSongsFromAI } from "../services/ai.service.js"
import { searchSong } from "../services/saavn.service.js"

export async function trendingSongs(req, res) {
    try {
        const songNames = await getTopSongsFromAI()

        if (!songNames?.length) {
            return res.status(500).json({
                success: false,
                message: "AI failed"
            })
        }

        const results = await Promise.all(
            songNames.map(searchSong)
        )

        const response = {
            success: true,
            type: "trending_songs",
            data: results.filter(Boolean)
        }


        res.json(response)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}