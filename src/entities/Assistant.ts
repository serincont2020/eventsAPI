import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AssistantData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    idAssistant: string

    @Column({nullable: true})
    assistant: number

    @Column({nullable: true})
    day: number

    @Column()
    quantityDays: number  // relation events
}