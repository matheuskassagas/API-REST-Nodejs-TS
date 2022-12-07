import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

//Repositorio de User
export const UserRepository = AppDataSource.getRepository(User)