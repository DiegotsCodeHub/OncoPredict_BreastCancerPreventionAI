import { Router } from "express"
import { authorizePermissions } from "../Middleware/authMiddleware"

const router = Router()

//Ejemplo: router.get('/profile', getCurrentUser); router.get([definir ruta], [Middleware],  [nombre del controlador])
router.get()
router.post()
router.delete()
router.patch()

export default router