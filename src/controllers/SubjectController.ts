import { Request, Response } from "express";
import { NotFoundError } from "../helpers/api-erros";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {

  // # METHOD POST # 
  async create(req: Request, res: Response){ // EndPoint Create
    const {name} = req.body

    if (!name){
      throw new NotFoundError('Id not Found')
    }
    const newSubject = SubjectRepository.create({name}) // recebe o dado da requisicao e armazena na variavel newSub...
    await SubjectRepository.save(newSubject) // salva o dado no banco 
    return res.status(201).json(newSubject) // retorna status create e o dado

  }

  // # METHOD GET # 
  async listById(req: Request, res: Response){
    const { id } = req.params
    const subject = await SubjectRepository.findOneBy({id: Number(id)})
    if (!id){
      throw new NotFoundError('Id not Found')
    }
    return res.status(201).json(subject)
  }
}