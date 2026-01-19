import express from "express"
import VendaController from "../controllers/VendaController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.post("/", VendaController.Criar)
router.put("/:id", VendaController.Atualizar)
router.delete("/:id", VendaController.Deletar)

export default router