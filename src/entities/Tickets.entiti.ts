import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventData } from "./Event.entiti";
import { UserData } from "./User.entiti";

@Entity()
export class TicketData extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    idTicket: string
    
    @Column({nullable: true})
    ticketPrice: number  // relation events

    @Column({nullable: true})
    ticketAvailable: number

    @Column({nullable: true})
    ticketSold: number

    @OneToMany(()=> EventData, (event)=> event.idTicket)
    // @JoinColumn({name: 'idEvent'})
    idEvent: EventData[]

    @OneToMany(()=> EventData, (event)=> event.idTicket)
    // @JoinColumn({name: 'idEvent'})
    idUser: UserData[]
}