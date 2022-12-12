import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { BadRequestError, NotFoundError } from "../helpers/api-erros";
import { UserRepository } from "../repositories/UserRepository";
import { User } from "../entities/User";

export class LoginController {
  async login(req: Request, res: Response){
    const { email, password } = req.body

    const user = await UserRepository.findOneBy({ email })

    if (!user ){
      throw new BadRequestError('Email or password wrong')
    }

    const verifyPass = await bcrypt.compare(password, user.password) //compering passwords

    if (!verifyPass){ 
      throw new BadRequestError('Email or password wrong')
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASSWORD ?? '', { expiresIn: '1h' })

    const {password: _, ...userLogin} = user

    return res.json({
      user: userLogin,
      token: token
    })
  }
}