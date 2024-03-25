import cors from "cors"
import express from "express"
import morgan from "morgan"
import adminRoutes from './routes/admin.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(adminRoutes)

export default app