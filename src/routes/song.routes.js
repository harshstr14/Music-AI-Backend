import express from "express"
import { trendingSongs } from "../controllers/song.controller.js"

const router = express.Router()

router.get("/", trendingSongs)

export default router