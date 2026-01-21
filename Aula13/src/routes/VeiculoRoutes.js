import express from "express"
import VeiculoController from "../controllers/VeiculoController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.get ("/", autentificar, VeiculoController.listar)
router.post("/", autentificar, autorization["seller"], VeiculoController.Criar)
router.put("/:id", autentificar, autorization["seller"], VeiculoController.Atualizar)
router.delete("/:id", autentificar, autorization["admin", "seller"], VeiculoController.Deletar)

export default router