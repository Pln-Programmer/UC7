import express from 'express';
import CursoController from '../controllers/CursoController.js';

const router = express.Router();

router.get('/', CursoController.listar);
router.post('/', CursoController.criar);
router.get('/:id', CursoController.buscarPorId);
router.put('/:id', CursoController.atualizar);
router.delete('/:id', CursoController.deletar);

export default router;