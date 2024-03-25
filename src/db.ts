import { DataSource } from "typeorm"
import { EventData } from "./entities/Event"
import { AssistantData } from "./entities/Assistant"
import { TicketData } from "./entities/Tickets"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username:"postgres",
    password: "admin",
    database: "eventsdb",
    synchronize: true,
    logging: true,
    entities: [EventData, AssistantData, TicketData],
    // subscribers: [],
    // migrations: ['migrations'],
})