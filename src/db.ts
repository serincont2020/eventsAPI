import { DataSource } from "typeorm"
import { EventData } from "./entities/Event.entiti"
import { AssistantData } from "./entities/Assistant.entiti"
import { TicketData } from "./entities/Tickets.entiti"
import { AdminData } from "./entities/Admin.entiti"
import { UserData } from "./entities/User.entiti"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "admin",
    database: "eventsdb",
    synchronize: true,
    logging: true,
    entities: [EventData, AssistantData, TicketData, AdminData, UserData],
    // subscribers: [],
    // migrations: ['migrations'],
})