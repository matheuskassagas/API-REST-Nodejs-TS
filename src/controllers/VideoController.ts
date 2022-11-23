import { Request, Response } from "express";
import { VideoRepository } from "../repositories/VideoRepository";

export class VideoController {
  async create(req: Request, res: Response){ // EndPoint Create
    const {title, url} = req.body

    try { 
      const newSubject = VideoRepository.create({title, url}) // recebe o dado da requisicao e armazena na variavel newSub...
      await VideoRepository.save(newSubject) // salva o dado no banco 
      return res.status(201).json(newSubject) // retorna status create e o dado

      console.log(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
    //return res.json('controller criado')
  }
}