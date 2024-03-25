import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TicketData extends BaseEntity{
    @PrimaryGeneratedColumn()
    idTicket: string
    
    @Column()
    ticketPrice: number  // relation events

    @Column()
    ticketAvailable: number

    @Column()
    ticketSold: number
}