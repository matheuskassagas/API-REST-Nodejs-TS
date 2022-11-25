import { Request, Response } from "express";
import { RelationId } from "typeorm";
import { RoomRepository } from "../repositories/RoomRepository";
import { SubjectRepository } from "../repositories/SubjectRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {

  // # METHOD CREATE # | endPoint /room .json to create an object room 
  async create(req: Request, res: Response){ // EndPoint Create
    const {name, description} = req.body
    
    try { 
      const newRoom = RoomRepository.create({name, description}) 
      await RoomRepository.save(newRoom) // salva o dado no banco 
      return res.status(201).json(newRoom) // retorna status create e o dado

      console.log(newRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
    //return res.json('controller criado')
  }



  // # METHOD CREATE # | endPoint /room/id .json to create an object video in a room 
  async createVideo(req: Request, res: Response){ // cria um video relacionando com uma room 
    const {title, url} = req.body
    const { idRoom } = req.params
    
    try { 
      const room = await RoomRepository.findOneBy({id: Number(idRoom)}) //faz uma busca se ja existe a room
      if(!room){
        return res.status(404).json({message: 'Id nao encontrado'})
      }
      const newVideo = VideoRepository.create({ //caso nao existe ele cria uma nova
        title, 
        url, 
        room
      })

      await VideoRepository.save(newVideo) // salva 
      return res.status(201).json(newVideo) // retorn status e objeto criado
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }
  
  // # METHOD GET # | endPoint /room/id .json to get an object room 
  async getRoom(req: Request, res: Response){
    const { id } = req.params

    try{
      const room = await RoomRepository.find({
          where: { id: Number(id) },
          relations: { videos:true, subjects:true }
      })
  
      if (!id){
      return res.status(404).json({message: 'Id nao encontrado'})
      }
      return res.status(201).json(room)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

  // # METHOD GET # | endPoint /video/id .json to get an object video 
  async getVideo(req: Request, res: Response){
    const { id } = req.params
    const video = await VideoRepository.findOneBy({id: Number(id)})

    try{
      const video = await VideoRepository.findOneBy({id: Number(id)})
      if (!id){
      return res.status(404).json({message: 'Id nao encontrado'})
      }
      return res.status(201).json(video)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

    // # METHOD POST # | endPoint /room/id/create .json to get an object room 
    async roomSubject(req: Request, res: Response) {
      const { subject_id } = req.body
      const { idRoom } = req.params
  
      try {
        const room = await RoomRepository.findOneBy({ id: Number(idRoom) })
  
        if (!room) {
          return res.status(404).json({ message: 'Aula não existe' })
        }
  
        const subject = await RoomRepository.findOneBy({
          id: Number(subject_id),
        })
  
        if (!subject) {
          return res.status(404).json({ message: 'Disciplina não existe' })
        }
  
        const roomUpdate = {
          ...room,
          subjects: [subject],
        }
  
        await RoomRepository.save(roomUpdate)
  
        return res.status(200).json(room)
      } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
      }
    }

    // # METHOD GET # | endPoint  .json to get an object room and relations
    async listRooms(req: Request, res: Response) {
      try {
        const room = await RoomRepository.find({ 
          relations: {
            videos: true,
            subjects: true
          }
         })
        return res.json(room)
      } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Sever Error' })
      }
    }

}