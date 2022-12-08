import { Router } from "express";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
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
routes.put('/user/:id', new UserController().updateUser)


// ==================== METHODS ROOMS ==================== \\
// CREATE ROOM
routes.post('/room', new RoomController().create)
// GET ROOM BY ID
routes.get('/room/:id', new RoomController().listById)
// GET ROOMS
routes.get('/rooms', new RoomController().listRooms)


// ==================== METHODS VIDEOS ==================== \\
routes.post('/video/:idRoom', new VideoController().createByIdRoom)
routes.get('/video/:id', new VideoController().listById)



// ==================== METHODS SUBJECTS ==================== \\
routes.post('/subject', new SubjectController().create)
routes.post('/subject/:idRoom', new SubjectController().createByIdRoom)
routes.get('/subject/:id', new SubjectController().listById)

export default routes