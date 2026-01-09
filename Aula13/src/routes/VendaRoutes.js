import express from "express"
import VendaController from "../controllers/VendaController.js"
const router = express.Router()

router.post("/", VendaController.Criar)
router.put("/:id", VendaController.Atualizar)
router.delete("/:id", VendaController.Deletar)

export default router