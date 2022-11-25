import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {

  // # METHOD POST # 
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


  // # METHOD GET # 
  async getSubject(req: Request, res: Response){
    const { id } = req.params
    
    try{
      const subject = await SubjectRepository.findOneBy({id: Number(id)})
      if (!id){
      return res.status(404).json({message: 'Id nao encontrado'})
      }
      return res.status(201).json(subject)
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
  }

}