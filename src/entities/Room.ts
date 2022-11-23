import { Entity } from "typeorm";

@Entity('rooms')
export class Room{
  id: number
  name: string
}