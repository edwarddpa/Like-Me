import express from "express"
import "dotenv/config"
import cors from "cors"

import postRoutes from "./routes/posts.routes.js"

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

app.use(postRoutes)

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`))