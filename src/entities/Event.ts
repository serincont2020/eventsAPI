import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventData extends BaseEntity {
    @PrimaryGeneratedColumn()
    idEvent: string

    @Column()
    nameEvent: string

    @Column()
    ticketPrice: number // relation tickets

    @Column()
    startDate: Date 

    @Column()
    location: string

    @Column()
    sitesInterest: string

    @Column()
    artists: string

    @Column()
    quantityDays: number // relation assintants
}