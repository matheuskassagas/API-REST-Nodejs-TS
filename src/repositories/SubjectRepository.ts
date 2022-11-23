import { AppDataSource } from "../data-source";
import { Subject } from "../entities/Subject";

//Repositorio de Subject
export const SubjectRepository = AppDataSource.getRepository(Subject)