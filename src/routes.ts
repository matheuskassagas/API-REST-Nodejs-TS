import { Router } from "express";
import { SubjectController } from "./Controllers/SubjectContrller";

const routes = Router()

routes.post('/subject', new SubjectController().create)

export default routes