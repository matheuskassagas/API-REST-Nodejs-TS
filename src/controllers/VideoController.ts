import { Request, Response } from "express"
import { BadRequestError, NotFoundError } from "../helpers/api-erros"
import { RoomRepository } from "../repositories/RoomRepository"
import { VideoRepository } from "../repositories/VideoRepository"

export class VideoController {

  //
  async createByIdRoom(req: Request, res: Response){ // cria um video relacionando com uma room 
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

  // 
  async listById (req: Request, res: Response){
    const { id } = req.params
    const video = await VideoRepository.findOneBy({id: Number(id)})
    if (!id){
      throw new NotFoundError('Id not Found')
    }
    return res.status(201).json(video)
  }
}


