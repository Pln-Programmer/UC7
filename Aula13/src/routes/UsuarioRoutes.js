import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
import autentificar from "../middleware/middleware.js"
const router = express.Router()

router.post("/", UsuarioController.Criar)
router.post("/login", UsuarioController.Login)
router.put("/:id", autentificar, UsuarioController.Atualizar)
router.delete("/:id", UsuarioController.Deletar)

export default router