import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.post("/", UsuarioController.Criar)
router.post("/login", UsuarioController.Login)
router.get("/perfil", autentificar, UsuarioController.ListarVendedor)
router.put("/:id", autentificar, UsuarioController.Atualizar)
router.delete("/:id",autentificar, UsuarioController.Deletar)

export default router