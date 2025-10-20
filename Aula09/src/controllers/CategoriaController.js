import CategoriaModel from "../models/CategoriaModel.js"

export default class CategoriaController{

    static listar(req, res){
        try {
            const categorias = CategoriaModel.listar()
            if(!categorias){
                res.status(400).json({msg: "Erro ao listar os categorias"})
                return
            }
            res.status(200).json(categorias)
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
    static buscarPorId(req, res){
        try {
            const id = req.params.id
            const categoria = CategoriaModel.buscarPorId(id)
            if(!categoria){
                res.status(400).json({msg: "Categoria não encontrado"})
            return
            }
            res.status(200).json(categoria)
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
    static buscarPorNome(req, res){
        try {
            const nome = req.params.nome
            const categorias = CategoriaModel.buscarPorNome(nome)
            if(categorias.length === 0){
                res.status(400).json({msg: "Nenhuma categoria com esse nome foi encontrado!"})
            return
            }
            res.status(200).json(categorias)
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
    static criar(req,res){
        try {
            const {nome, descricao} = req.body
            if(!nome || !descricao){
                res.status(400).json({msg: "Preencha todos os campos!"})
            }
            const categorias = CategoriaModel.listar()
            const novo = {
                id: categorias.length + 1,
                nome: nome,
                descricao: descricao
            }
            CategoriaModel.criar(novo)
            res.status(201).json({msg: "Categoria Criado", Categoria:novo})
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
    static atualizar(req,res){
        try {
            const id = req.params.id
            const {nome, descricao} = req.body
            if(!nome || !descricao){
                res.status(400).json({msg: "Preencha todos os campos!"})
            }
            const atualizado = CategoriaModel.atualizar(id, {nome, descricao})
            if(!atualizado){
                res.status(400).json({msg: "Categoria não encontrado!"})
                return
            }

            res.status(201).json({msg: "Categoria atualizado", Categoria:atualizado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
    static deletar(req,res){
        try {
         const id = req.params.id   
            const status = CategoriaModel.deletar(id)
            if(!status){
                res.status(404).json({msg: "Categoria não encontrado!"})
                return
            }
            res.status(200).json({msg: "Categoria excluido!"})
        } catch (error) {
            res.status(500).json({msg: "Erro interno", erro: error.message})
        }
    }
}