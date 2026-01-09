import express from "express"
import ClienteController from "../controllers/ClienteController.js"
const router = express.Router()

router.post("/", ClienteController.Criar)
router.put("/:id", ClienteController.Atualizar)
router.delete("/:id", ClienteController.Deletar)

export default router