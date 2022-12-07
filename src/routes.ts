import { Request, Response, Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
import fs from 'fs'
import { ApiError, BadRequestError } from "./helpers/api-erros";
import { UserController } from "./controllers/UserController";


const routes = Router()

// METHOD POSTS
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom', new RoomController().createVideo)
routes.post('/room/:idRoom/create', new RoomController().roomSubject)
routes.post('/users', new UserController().create)

// METHOD GETS
routes.get('/room/:id', new RoomController().getRoom)
routes.get('/video/:id', new RoomController().getVideo)
routes.get('/subject/:id', new SubjectController().getSubject)
routes.get('/room', new RoomController().listRooms)


export default routes