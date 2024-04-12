import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TicketData } from "./Tickets.entiti";
import { UserData } from "./User.entiti";
import { AdminData } from "./Admin.entiti";
import { AssistantData } from "./Assistant.entiti";

@Entity()
export class EventData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idEvent: string

    @Column()
    eventInfo: string // nameEvent, startDate, location, artist, quantityDays

    @Column({nullable: true})
    latitude: string

    @Column({nullable: true})
    longitude: string

    @Column({nullable: true})
    sitesInterest: string

    @OneToMany(()=> AdminData, (admin)=> admin.idEvent)
    idAdmin : AdminData[]

    @OneToMany(()=> UserData, (user)=> user.idEvent)
    idUser : UserData[]

    @OneToMany(()=> AssistantData, (assistant)=> assistant.idEvent)
    //@JoinColumn({name: 'idAssistant'})
    idAssistant : AssistantData[]

    @ManyToOne(()=> TicketData, (ticket)=> ticket.idEvent)
    @JoinColumn({name: 'idTicket'})
    idTicket : TicketData
}