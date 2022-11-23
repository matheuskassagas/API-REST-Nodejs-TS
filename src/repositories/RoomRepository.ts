import { AppDataSource } from "../data-source";
import { Room } from "../entities/Room";

//Repositorio de Room
export const RoomRepository = AppDataSource.getRepository(Room)