import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EventData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idEvent: string

    @Column()
    nameEvent: string

    @Column()
    ticketPrice: number // relation tickets

    @Column({type: "timestamp"})
    startDate: Date

    @Column()
    location: string

    @Column({nullable: true})
    coordinates: string

    @Column({nullable: true})
    sitesInterest: string

    @Column()
    artists: string

    @Column()
    quantityDays: number // relation assintants
}