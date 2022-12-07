import { Request, Response, Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
import fs from 'fs'
import { ApiError, BadRequestError } from "./helpers/api-erros";
import { UserController } from "./controllers/UserController";
import { VideoController } from "./controllers/VideoController";


const routes = Router()

// ==================== METHODS USERS ==================== \\
// CREATE USER
routes.post('/user', new UserController().create)
// GET USER BY ID
routes.get('/user/:id', new UserController().listById)
// GET USERS
routes.get('/users', new UserController().listUsers)
// UPDATE USER
//routes.post('/user/:id', new UserController().update)


// ==================== METHODS ROOMS ==================== \\
// CREATE ROOM
routes.post('/room', new RoomController().create)
// UPDATE ROOM WITH RELATION
routes.post('/room/:idRoom/create', new RoomController().roomSubject)
// GET ROOM BY ID
routes.get('/room/:id', new RoomController().listById)
// GET ROOMS
routes.get('/rooms', new RoomController().listRooms)


// ==================== METHODS VIDEOS ==================== \\
routes.post('/video/:idRoom', new VideoController().createVideo)
routes.get('/video/:id', new VideoController().listById)



// ==================== METHODS SUBJECTS ==================== \\
routes.post('/subject', new SubjectController().create)
routes.get('/subject/:id', new SubjectController().listById)





export default routes