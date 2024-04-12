import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EventData } from "./Event.entiti";
import { UserData } from "./User.entiti";

@Entity()
export class AssistantData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idAssistant: string

    @Column({nullable: true})
    assistant: number

    @Column({nullable: true})
    day: number

    @ManyToOne(()=> EventData, (event)=> event.idAssistant)
    @JoinColumn({name: 'idEvent'})
    idEvent: EventData

    @OneToMany(()=> UserData, (user)=> user.idUser)
    idUser: UserData
}