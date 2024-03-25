import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}