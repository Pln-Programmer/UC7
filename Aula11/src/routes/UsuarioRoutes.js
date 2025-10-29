import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
const router = express.Router()

router.get("/estatisticas", UsuarioController.estatisticas)
router.get("/", UsuarioController.Listar)
router.get("/:id", UsuarioController.buscarPorId)
router.post ("/", UsuarioController.criar)
router.put("/:id", UsuarioController.atualizar)
router.delete("/:id", UsuarioController.deletar)
router.get("/localidade/:localidade", UsuarioController.buscarPorLocalidade)
router.get("/estado/:estado", UsuarioController.buscarPorEstado)
router.get("/ordenar/nome", UsuarioController.OrdemAlfabetica)
router.get("/cep/:cep", UsuarioController.buscarPorCep)
router.get("/bairro/:bairro", UsuarioController.buscarPorBairro)


export default router