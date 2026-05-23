import express from "express"
import { topArtists } from "../controllers/artist.controller.js"

const router = express.Router()

router.get("/", topArtists)

export default router