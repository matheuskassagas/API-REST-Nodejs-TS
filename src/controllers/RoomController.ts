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
  async createVideo(req: Request, res: Response){ // cria um video relacionando com uma room 
    const {title, url} = req.body
    const { idRoom } = req.params
    const room = await RoomRepository.findOneBy({id: Number(idRoom)}) //faz uma busca se ja existe a room
    if(!room){
      throw new BadRequestError('There is not room')
    }
    const newVideo = VideoRepository.create({ //caso nao existe ele cria uma nova
      title, 
      url, 
      room
    })
    await VideoRepository.save(newVideo) // salva 
    return res.status(201).json(newVideo) // retorn status e objeto criado
  }
  
  // # METHOD GET # | endPoint /room/id .json to get an object room 
  async getRoom(req: Request, res: Response){
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

  // # METHOD GET # | endPoint /video/id .json to get an object video 
  async getVideo(req: Request, res: Response){
    const { id } = req.params
    const video = await VideoRepository.findOneBy({id: Number(id)})
    if (!id){
      throw new NotFoundError('Id not Found')
    }
    return res.status(201).json(video)
  }

    // # METHOD POST # | endPoint /room/id/create .json to get an object room 
    async roomSubject(req: Request, res: Response) {
      const { subject_id } = req.body
      const { idRoom } = req.params
      const room = await RoomRepository.findOneBy({ id: Number(idRoom) })
  
      if (!room) {
        throw new NotFoundError('Id not Found')
      }
  
      const subject = await RoomRepository.findOneBy({
        id: Number(subject_id),
      })
  
      if (!subject) {
        throw new NotFoundError('Id not Found')
      }
  
      const roomUpdate = {
        ...room,
        subjects: [subject],
      }
  
      await RoomRepository.save(roomUpdate)
  
      return res.status(200).json(room)
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