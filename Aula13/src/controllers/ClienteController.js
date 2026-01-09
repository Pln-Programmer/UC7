import ClienteModel from "../models/ClienteModel.js";
import bcrypt from 'bcrypt'
import 'dotenv/config'

export default class ClienteController{

    static async Criar(req, res){
        try {
            const {nome, documento, email, telefone} = req.body

            if(!nome || !documento || !email || !telefone){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const verificar = await ClienteModel.BuscarPorEmail(email)
            if(verificar){
                return res.status(400).json ({msg: "Email já cadastrado"})
            }
            const novoCliente = await ClienteModel.Criar({ nome, documento, email, telefone })
            return res.status(201).json({msg: "Cliente criado com sucesso", Cliente: novoCliente})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao criar o Cliente", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const id = req.params.id
            const {nome, documento, email, telefone} = req.body

            if(!nome || !documento || !email || !telefone){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const ClienteAtualizado = await ClienteModel.Atualizar(id, { nome, documento, email, telefone })
            return res.status(201).json({msg: "Usuário Atualizado com sucesso", Cliente: ClienteAtualizado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar o cliente", erro: error.message})
        }
    }

    static async Deletar(req,res){
        try {
             const id = req.params.id
            const status = await ClienteModel.Deletar(id)
            if (!status) {
                return res.status(404).json({ msg: "Cliente não encontrado!" });
                
            }
            res.status(200).json({ msg: "Cliente excluido!" });
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar o cliente", erro: error.message})
        }
       
    }
}