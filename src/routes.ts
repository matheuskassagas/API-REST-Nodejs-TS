import { Router } from "express";
import { LoginController } from "./controllers/LoginController";
import { RoomController } from "./controllers/RoomController";
import { SubjectController } from "./controllers/SubjectController";
import { UserController } from "./controllers/UserController";
import { VideoController } from "./controllers/VideoController";
import { authMiddleware } from "./middlewares/auth";


const routes = Router()

// ==================== LOGIN ==================== \\
routes.post('/login', new LoginController().login)
routes.get('/profile', authMiddleware, new LoginController().getProfile)

// ==================== METHODS USERS ==================== \\
// CREATE USER
// ==================== METHODS USERS ==================== \\
// GET USER BY ID
routes.get('/user/:id', new UserController().listById)
// GET USERS
routes.get('/users', new UserController().listUsers)
// UPDATE USER
routes.put('/user/:id', new UserController().updateUser)
// DELETE USER
routes.delete('/user/:id', new UserController().deleteUser)


// ==================== METHODS ROOMS ==================== \\
// CREATE ROOM
routes.post('/room', new RoomController().create)
// GET ROOM BY ID
routes.get('/room/:id', new RoomController().listById)
// GET ROOMS
routes.get('/rooms', new RoomController().listRooms)
// UPDATE ROOMS
//routes.put('/room/:id', new RoomController().updateRooms)


// ==================== METHODS VIDEOS ==================== \\
routes.post('/video/:idRoom', new VideoController().createByIdRoom)
routes.get('/video/:id', new VideoController().listById)



// ==================== METHODS SUBJECTS ==================== \\
routes.post('/subject', new SubjectController().create)
routes.post('/subject/:idRoom', new SubjectController().createByIdRoom)
routes.get('/subject/:id', new SubjectController().listById)

export default routes