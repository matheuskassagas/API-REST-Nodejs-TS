import { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../helpers/api-erros";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt'

export class UserController {
  async create (req: Request, res: Response){
    const {name, email, password} = req.body
    const userExist = UserRepository.findOneBy({ email })

    if (!userExist) {
      throw new BadRequestError('User alredy exist')
    }
    
    const hashPassword = await bcrypt.hash(password, 10)
    
    const newUser = UserRepository.create({
      name, 
      email, 
      password: hashPassword})

    await UserRepository.save(newUser)
    return res.status(201).json(this.create)
  }

  async listById (req: Request, res: Response){
    const { id }  = req.params
    const userFound = await UserRepository.findOneBy({ id: Number(id)})

    if (!userFound) {
      throw new NotFoundError('User not found')
    }
    return res.status(201).json(userFound)
  }

  async listUsers (req: Request, res: Response){
    const usersFound = await UserRepository.find()
    if (!usersFound) {
      throw new NotFoundError('Users not found')
    }
    return res.json(usersFound)
  }

  async updateUser (req: Request, res: Response){
    const { id } = req.params
    const {name, email, password} = req.body
    const userToUpdate = await UserRepository.findOneBy({ id: Number(id) })

    if (!userToUpdate) {
      throw new NotFoundError('User not found')
    }

    if ( userToUpdate != undefined){
    userToUpdate.name = name
    userToUpdate.email = email
    userToUpdate.password = password
    await UserRepository.save(userToUpdate)
  }

    return res.status(201).json(userToUpdate)  
  }

  async deleteUser (req: Request, res: Response){
    const { id } = req.params
    const userToDelete = await UserRepository.findOneBy({ id: Number(id) })

    if (!userToDelete) {
      throw new NotFoundError('User not found')
    }
    if ( userToDelete != undefined){
    await UserRepository.remove(userToDelete)
  }
    return res.status(200).json({ message: "User deleted"})  
  }
}
