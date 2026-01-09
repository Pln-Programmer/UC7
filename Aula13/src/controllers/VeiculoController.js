import VeiculoModel from "../models/VeiculoModel.js";
import bcrypt from 'bcrypt'
import 'dotenv/config'

export default class VeiculoController{

    static async Criar(req, res){
        try {
            const {marca, modelo, ano, preco, status} = req.body

            if(!marca || !modelo || !ano || !preco || !status){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const novoVeiculo = await VeiculoModel.Criar({ marca, modelo, ano, preco, status })
            return res.status(201).json({msg: "Veiculo criado com sucesso", Veiculo: novoVeiculo})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao criar o Veiculo", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const id = req.params.id
            const {marca, modelo, ano, preco, status} = req.body

            if(!marca || !modelo || !ano || !preco || !status){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const VeiculoAtualizado = await VeiculoModel.Atualizar(id, { marca, modelo, ano, preco, status })
            return res.status(201).json({msg: "Usuário Atualizado com sucesso", Veiculo: VeiculoAtualizado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar o Veiculo", erro: error.message})
        }
    }

    static async Deletar(req,res){
        try {
             const id = req.params.id
            const status = await VeiculoModel.Deletar(id)
            if (!status) {
                return res.status(404).json({ msg: "Veiculo não encontrado!" });
                
            }
            res.status(200).json({ msg: "Veiculo excluido!" });
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar o Veiculo", erro: error.message})
        }
       
    }
}