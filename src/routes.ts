import { Request, Response, Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
import fs from 'fs'
import { ApiError } from "./helpers/api-erros";


const routes = Router()

// ERROR EXCEPTION
routes.get('/', (req: Request, res: Response) => {
  throw new ApiError('Erro Lancado', 500) // class api-errors

  return res.json('ok')
})

// METHOD POSTS
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom', new RoomController().createVideo)
routes.post('/room/:idRoom/create', new RoomController().roomSubject)

// METHOD GETS
routes.get('/room/:id', new RoomController().getRoom)
routes.get('/video/:id', new RoomController().getVideo)
routes.get('/subject/:id', new SubjectController().getSubject)
routes.get('/room', new RoomController().listRooms)


export default routes