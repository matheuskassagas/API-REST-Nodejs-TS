import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { BadRequestError, NotFoundError, UnauthorizedError } from "../helpers/api-erros";
import { UserRepository } from "../repositories/UserRepository";

type JwtPayload = {
  id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers // It get the token

  if (!authorization) {
    throw new UnauthorizedError('You are not authorized')
  }
  const token = authorization.split(' ')[1]
  const { id } = jwt.verify(token, process.env.JWT_PASSWORD ?? '') as JwtPayload
  
  const user = await UserRepository.findOneBy({ id })
  if (!user ){
    throw new UnauthorizedError('You are not authorized')
  } 

  const { password: _, ...loggedUser } = user

  req.user = loggedUser

  next()
}