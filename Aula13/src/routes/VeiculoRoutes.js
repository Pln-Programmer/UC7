import express from "express"
import VeiculoController from "../controllers/VeiculoController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.get ("/", VeiculoController.listar)
router.post("/", VeiculoController.Criar)
router.put("/:id", VeiculoController.Atualizar)
router.delete("/:id", VeiculoController.Deletar)

export default router