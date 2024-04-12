import cors from "cors"
import express from "express"
import morgan from "morgan"
import { EventRoutes } from './routes/routes'
import { AdminService } from "./services/admin.services"
import { TicketService } from "./services/ticket.service"
import { UserService } from "./services/user.services"

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const adminService = new AdminService();
const ticketService = new TicketService()
const userService = new UserService()
const eventRoutes = new EventRoutes(adminService, ticketService, userService);
app.use(eventRoutes.router)



export default app