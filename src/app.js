import express from "express"
import cors from "cors"

import artistRoutes from "./routes/artist.routes.js"
import songRoutes from "./routes/song.routes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/top-artists", artistRoutes)
app.use("/trending-songs", songRoutes)

export default app