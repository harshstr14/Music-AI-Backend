import { searchSaavn } from "../services/saavn.service.js"

export async function search(req, res) {

    try {

        const q = req.query.q

        const result = await searchSaavn(q)

        res.json(result)

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}