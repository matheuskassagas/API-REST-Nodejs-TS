import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (error: Error, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
    console.log(error);
    return res.status(500).json('Chegou aqui no error')
}