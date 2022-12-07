import { Request, Response } from "express";
import { RelationId } from "typeorm";
import { BadRequestError, NotFoundError } from "../helpers/api-erros";
import { RoomRepository } from "../repositories/RoomRepository";
import { SubjectRepository } from "../repositories/SubjectRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {

  // # METHOD CREATE # | endPoint /room .json to create an object room 
  async create(req: Request, res: Response){ // EndPoint Create
    const {name, description} = req.body
    const newRoom = RoomRepository.create({name, description}) 
    await RoomRepository.save(newRoom) // salva o dado no banco 
    return res.status(201).json(newRoom) // retorna status create e o dado   
  }

  // # METHOD CREATE # | endPoint /room/id .json to create an object video in a room 

  
  // # METHOD GET # | endPoint /room/id .json to get an object room 
  async listById(req: Request, res: Response){
    const { id } = req.params
    const room = await RoomRepository.find({
      where: { id: Number(id) },
      relations: { videos:true, subjects:true }
    })
    if (!id){
    throw new NotFoundError('Id not Found')
    }
    return res.status(201).json(room)
  }

  // # METHOD GET # | endPoint  .json to get an object room and relations
  async listRooms(req: Request, res: Response) {
    const room = await RoomRepository.find({ 
      relations: {
        videos: true,
        subjects: true
      }
    })
    return res.json(room)
  }
}