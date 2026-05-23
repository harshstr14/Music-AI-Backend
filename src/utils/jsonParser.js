export function parseJSON(text) {

    try {

        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()

        const match = cleaned.match(/\[[\s\S]*\]/)

        if (!match) {
            return []
        }

        return JSON.parse(match[0])

    } catch (e) {

        console.log("JSON Parse Error:", e.message)

        return []
    }
}