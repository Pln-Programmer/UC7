import AlunoModel from "../models/AlunoModel.js";

export default class AlunoController {

    static async listar(req, res) {
        try {
            const alunos = await AlunoModel.listar();

            if (!alunos || alunos.length === 0) {
                return res.status(404).json({ msg: "Nenhum aluno cadastrado" });
            }

            res.status(200).json({
                msg: "Alunos encontrados",
                alunos
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro ao listar alunos",
                erro: error.message
            });
        }
    }

    static async criar(req, res) {
        try {
            const { nome, email } = req.body;

            if (!nome || !email) {
                return res.status(400).json({
                    msg: "Nome e email são obrigatórios"
                });
            }

            const alunoCriado = await AlunoModel.criar({ nome, email });

            res.status(201).json({
                msg: "Aluno criado com sucesso",
                aluno: alunoCriado
            });

        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar aluno",
                erro: error.message
            });
        }
    }
}
