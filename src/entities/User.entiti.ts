import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventData } from "./Event.entiti";
import { AssistantData } from "./Assistant.entiti";
import { TicketData } from "./Tickets.entiti";

@Entity()
export class UserData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idUser: string

    @Column()
    firstame: string

    @Column()
    lastname: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    rol: string

    @ManyToOne(()=> EventData, (event)=> event.idUser)
    @JoinColumn({name: 'idEvent'})
    idEvent: EventData[]

    @ManyToOne(()=> AssistantData, (assistant)=> assistant.idAssistant)
    @JoinColumn({name: 'idAssistant'})
    idAssistant : AssistantData

    @ManyToOne(()=> TicketData, (ticket)=> ticket.idUser)
    @JoinColumn({name: 'idTicket'})
    idTicket : TicketData
}