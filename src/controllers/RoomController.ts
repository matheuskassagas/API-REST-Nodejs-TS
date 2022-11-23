import { Request, Response } from "express";
import { ObjectID } from "typeorm";
import { RoomRepository } from "../repositories/RoomRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {

  // # METHOD CREATE # | endPoint /room .json to create an object room 
  async create(req: Request, res: Response){ // EndPoint Create
    const {name, description} = req.body

    try { 
      const newSubject = RoomRepository.create({name, description}) // recebe o dado da requisicao e armazena na variavel newSub...
      await RoomRepository.save(newSubject) // salva o dado no banco 
      return res.status(201).json(newSubject) // retorna status create e o dado

      console.log(newSubject);
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
    const room = await RoomRepository.findOneBy({id: Number(id)})

    if (!id){
      return res.status(404).json({message: 'Id nao encontrado'})
    }
    return res.status(201).json(room)
  }
}