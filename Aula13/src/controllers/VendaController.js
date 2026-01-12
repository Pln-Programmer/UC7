import VendaModel from "../models/VendaModel.js";
import bcrypt from 'bcrypt'
import 'dotenv/config'

export default class VendaController{

    static async Criar(req, res){
        try {
            const {veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, observacoes} = req.body

            if(!veiculo_id || !cliente_id || !vendedor_id || !valor_final || !data_venda || !forma_pagamento || !status || !observacoes){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const novaVenda = await VendaModel.Criar({ veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, observacoes })
            return res.status(201).json({msg: "Venda criada com sucesso", Venda: novaVenda})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao criar a Venda", erro: error.message})
        }
    }

    static async Atualizar(req, res){
        try {
            const id = req.params.id
            const {veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, observacoes} = req.body

            if(!veiculo_id || !cliente_id || !vendedor_id || !valor_final || !data_venda || !forma_pagamento || !status || !observacoes){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const VendaAtualizada = await VendaModel.Atualizar(id, { veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, observacoes })
            return res.status(201).json({msg: "Usuário Atualizada com sucesso", Venda: VendaAtualizada})
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao atualizar a Venda", erro: error.message})
        }
    }

    static async Deletar(req,res){
        try {
             const id = req.params.id
            const status = await VendaModel.Deletar(id)
            if (!status) {
                return res.status(404).json({ msg: "Venda não encontrada!" });
                
            }
            res.status(200).json({ msg: "Venda excluida!" });
        } catch (error) {
            res.status(500).json({msg: "Erro interno ao deletar a Venda", erro: error.message})
        }
       
    }
}