import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')
export class Video{
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    title: string

    @Column({ type: 'text' })
    url: string

    //Relacionamentos entre classes
    @ManyToOne(() => Room, (room) => room.videos)
    @JoinColumn({name: 'room_id'}) //Nomeando a FK na tabela do banco
    room: Room
}