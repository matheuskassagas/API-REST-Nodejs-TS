import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {
  async create(req: Request, res: Response){ // EndPoint Create
    const {name} = req.body

    if (!name){
      return res.status(400).json({mensagem: 'Nome obrigatorio'})
    }
    try { 
      const newSubject = SubjectRepository.create({name}) // recebe o dado da requisicao e armazena na variavel newSub...
      await SubjectRepository.save(newSubject) // salva o dado no banco 
      return res.status(201).json(newSubject) // retorna status create e o dado

      console.log(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
    //return res.json('controller criado')
  }
}