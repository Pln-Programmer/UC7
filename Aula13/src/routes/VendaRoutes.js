import express from "express"
import VendaController from "../controllers/VendaController.js"
import autentificar from "../middleware/authMiddleware.js"
import autorization from "../middleware/autorizationMiddleware.js"
const router = express.Router()

router.post("/", autentificar, autorization["client"], VendaController.Criar)
router.put("/:id", autentificar, VendaController.Atualizar)
router.delete("/:id", autentificar, VendaController.Deletar)
router.get("/", autentificar, autorization["admin"], VendaController.ListarGeral)
router.get("/cliente/:cliente_id", autentificar, autorization["client"], VendaController.ListarCliente)
router.get("/vendedor/:vendedor_id", autentificar, autorization["seller"], VendaController.ListarVendedor)

export default router