import UsuarioModel from "../models/UsuarioModel.js";

export default class UsuarioController{

    static async listar(req, res){
        try {
            const usuarios = await UsuarioModel.listar();
            if(!usuarios || usuarios.length === 0){
                res.status(404).json({msg: "Nenhum usuário cadastrado"});
                return
            }
            res.status(200).json({msg: "Usuários encontrados", usuarios})
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao listar usuarios",
                    erro: error.message
                }
            )
        }
    }

    static async criar(req, res){
        try {
            const {nome, email} = req.body;
            if(!nome || !email){
                res.status(400).json({msg: "Nome e email são obrigatórios"});
                return
            }
            const usuarioCriado = await UsuarioModel.criar({nome, email});
            res.status(201).json(
                {
                    msg: "Usuário criado com sucesso",
                    usuario: usuarioCriado
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao criar usuário",
                    erro: error.message
                }
            )
        }

}