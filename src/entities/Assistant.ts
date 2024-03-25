import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AssistantData extends BaseEntity {
    @PrimaryGeneratedColumn()
    idAssistant: string

    @Column()
    assistant: number

    @Column()
    day: number

    @Column()
    quantityDays: number  // relation events
}