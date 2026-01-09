import express from "express"
import VeiculoController from "../controllers/VeiculoController.js"
const router = express.Router()

router.post("/", VeiculoController.Criar)
router.put("/:id", VeiculoController.Atualizar)
router.delete("/:id", VeiculoController.Deletar)

export default router