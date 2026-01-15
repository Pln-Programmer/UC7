import express from "express"
import AlunoController from "../controller/AlunoController.js"
const router = express.Router();

router.get("/", AlunoController.listar);
router.post("/", AlunoController.criar);

export default router;