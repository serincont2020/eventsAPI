import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventData } from "./Event.entiti";

@Entity()
export class AdminData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idAdmin: string

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

    @ManyToOne(()=> EventData, (event)=> event.idAdmin)
    @JoinColumn({name: 'idEvent'})
    idEvent: EventData[]
}