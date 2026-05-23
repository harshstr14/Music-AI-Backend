import axios from "axios"
import { SAAVN_BASE_URL } from "../config/saavn.config.js"

export async function searchArtist(query) {

    const res = await axios.get(
        `${SAAVN_BASE_URL}/search/artists?query=${query}`
    )

    const results = res.data?.data?.results || []

    const artist = results[0]

    if (!artist) return null

    return artist
}

export async function searchSong(query) {

    const res = await axios.get(
        `${SAAVN_BASE_URL}/search/songs?query=${query}`
    )

    const results = res.data?.data?.results || []

    const song = results[0]

    if (!song) return null

    return song
}