import express from "express"
import ClienteController from "../controllers/ClienteController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.post("/", ClienteController.Criar)
router.put("/:id", autentificar,ClienteController.Atualizar)
router.delete("/:id", autentificar,ClienteController.Deletar)
router.get("/", autentificar, ClienteController.read)

export default router