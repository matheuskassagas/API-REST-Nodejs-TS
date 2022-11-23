import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {
  async create(req: Request, res: Response){ // EndPoint Create
    const {name} = req.body

    if (!name){
      return res.status(400).json({mensagem: 'Nome obrigatorio'})
    }
    try { 
      const newSubject = SubjectRepository.create({name})
      console.log(newSubject);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Server Error'})
    }
    //return res.json('controller criado')
  }
}