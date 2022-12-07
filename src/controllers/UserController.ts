import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { UserRepository } from "../repositories/UserRepository";

export class UserController {
  async create (req: Request, res: Response){
    const {name, email, password} = req.body
    const newUser = UserRepository.create({name, email, password})
    await UserRepository.save(newUser)
    return res.status(201)
  }
}
