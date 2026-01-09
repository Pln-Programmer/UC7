import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
const router = express.Router()

router.post("/", UsuarioController.Criar)
router.put("/:id", UsuarioController.Atualizar)
router.delete("/:id", UsuarioController.Deletar)

export default router