import { AppDataSource } from "../data-source";
import { Video } from "../entities/Video";

//Repositorio de Video
export const VideoRepository = AppDataSource.getRepository(Video)