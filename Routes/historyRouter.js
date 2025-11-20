import { Router } from "express"
import { authorizePermissions, authenticateUser } from "../Middleware/authMiddleware"
import { validateHistoryInput } from '../Middleware/validationMiddleware.js'


const router = Router()

//Ejemplo: router.get('/profile', getCurrentUser); router.get([definir ruta], [Middleware],  [nombre del controlador])
router.get()
router.post()
router.delete()
router.patch()

export default router