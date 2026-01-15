import CursoModel from "../models/CursoModel.js";

export default class CursoController{

    static async listar(req, res){
        try {
            const cursos = await CursoModel.Listar();
            if(!cursos || cursos.length === 0){
                res.status(404).json({msg: "Nenhum curso cadastrado"});
                return
            }
            res.status(200).json({msg: "Cursos encontrados", cursos})
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao listar cursos",
                    erro: error.message
                }
            )
        }
    }

    static async criar(req, res){
        try {
            const {nome, descricao} = req.body;
            if(!nome || !descricao){
                res.status(400).json({msg: "Dados obrigatórios não fornecidos"});
                return
            }
            const cursoCriado = await CursoModel.Criar(nome, descricao);
            res.status(201).json(
                {
                    msg: "Curso criado com sucesso",
                    curso: cursoCriado
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao criar curso",
                    erro: error.message
                }
            )
        }
    }

    static async buscarPorId(req, res){
        try {
            const {id} = req.params;
            const curso = await CursoModel.BuscarPorId(parseInt(id));
            if(!curso){
                res.status(404).json({msg: "Curso não encontrado"});
                return
            }
            res.status(200).json({msg: "Curso encontrado", curso})
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao buscar curso",
                    erro: error.message
                }
            )
        }
    }

    static async atualizar(req, res){
        try {
            const {id} = req.params;
            const {nome, descricao} = req.body;
            if(!nome || !descricao){
                res.status(400).json({msg: "Dados obrigatórios não fornecidos"});
                return
            }
            const cursoAtualizado = await CursoModel.atualizar(parseInt(id), nome, descricao);
            res.status(200).json(
                {
                    msg: "Curso atualizado com sucesso",
                    curso: cursoAtualizado
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao atualizar curso",
                    erro: error.message
                }
            )
        }
    }

    static async deletar(req, res){
        try {
            const {id} = req.params;
            const cursoDeletado = await CursoModel.deletar(parseInt(id));
            res.status(200).json(
                {
                    msg: "Curso deletado com sucesso",
                    curso: cursoDeletado
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao deletar curso",
                    erro: error.message
                }
            )
        }
    }
}
