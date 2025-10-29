import UsuarioModel from "../models/UsuarioModel.js";
import axios from "axios";

export default class UsuarioController {
  static Listar(req, res) {
    try {
      const usuario = UsuarioModel.listar();
      if (usuario.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuario) {
        res.status(400).json({ msg: "Erro ao buscar ao listar os usuarios" });
        return;
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static buscarPorId(req, res) {
    try {
        const id = req.params.id
    const usuario = UsuarioModel.buscarPorId(id);
      if (usuario.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuario) {
        res.status(400).json({ msg: "Usuario não encontrado!" });
        return;
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static async criar(req, res) {
    try {
        const {nome, cep, numero, telefone} = req.body
        if(!nome || !cep || !numero || !telefone){
            res.status(400).json({ msg: "Todos os campos devem ser preenchidos" });
            return
        }
        const buscarCep = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        if(buscarCep.erro){
            res.status(400).json({ msg: "Cep Invalido!" });
            return
        }
        const novoUsuario = {
            id: Date.now(),
            nome: nome,
            telefone: telefone,
            cep: cep,
            rua: buscarCep.data.logradouro,
            numero: numero,
            bairro: buscarCep.data.bairro,
            localidade: buscarCep.data.localidade,
            estado: buscarCep.data.estado
            
        }
        const userCriado = UsuarioModel.criar(novoUsuario)
        res.status(201).json({msg: "User Criado!", novoUsuario})
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static async atualizar(req, res) {
    try {
      const id = req.params.id
      const {nome, cep, numero, telefone} = req.body
      if(!nome || !cep || !numero || !telefone){
            res.status(400).json({ msg: "Todos os campos devem ser preenchidos" });
            return
        }
        const buscarCep = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        if(buscarCep.erro){
            res.status(400).json({ msg: "Cep Invalido!" });
            return
        }
        const dadosAtualizados = {
            id: Date.now(),
            nome: nome,
            telefone: telefone,
            cep: cep,
            rua: buscarCep.data.logradouro,
            numero: numero,
            bairro: buscarCep.data.bairro,
            localidade: buscarCep.data.localidade,
            estado: buscarCep.data.estado
            
        }
        const userAtualizado = UsuarioModel.atualizar(id, dadosAtualizados)
        if(!userAtualizado){
          res.status(400).json({msg: "Usuario não encontrado"})
        }
        res.status(201).json({msg: "Usuario atualizado!", dadosAtualizados})
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static deletar(req, res) {
    try {
      const id = req.params.id;
            const status = UsuarioModel.deletar(id);
            if (!status) {
              res.status(404).json({ msg: "Usuario não encontrado!" });
              return;
            }
            res.status(200).json({ msg: "Usuario excluido!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static buscarPorLocalidade(req,res){
    try {
      const localidade = req.params.localidade
      const usuarios = UsuarioModel.buscarPorLocalidade(localidade)
      if (usuarios.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuarios) {
        res.status(400).json({ msg: "Usuario não encontrado!" });
        return;
      }
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static buscarPorCep(req,res){
    try {
      const cep = req.params.cep
      const usuarios = UsuarioModel.buscarPorCep(cep)
      if (usuarios.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuarios) {
        res.status(400).json({ msg: "Usuario não encontrado!" });
        return;
      }
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static buscarPorBairro(req,res){
    try {
      const bairro = req.params.bairro
      const usuarios = UsuarioModel.buscarPorBairro(bairro)
      if (usuarios.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuarios) {
        res.status(400).json({ msg: "Usuario não encontrado!" });
        return;
      }
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static buscarPorEstado(req,res){
    try {
      const estado = req.params.estado
      const usuarios = UsuarioModel.buscarPorEstado(estado)
      if (usuarios.length === 0) {
        res.status(200).json({ msg: "Nenhum usuário cadastrado" });
        return;
      }
      if (!usuarios) {
        res.status(400).json({ msg: "Usuario não encontrado!" });
        return;
      }
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static OrdemAlfabetica(req,res){
    try {
      const nome = req.params.nome;
      const usuarios = UsuarioModel.OrdemAlfabetica(nome);

      if (usuarios.length === 0) {
        res.status(400).json({ msg: "Nenhum usuário encontrado" });
        return;
      }

      res.status(200).json(usuarios);
      
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }
  static estatisticas(req,res){
   try {
      const estatistica = UsuarioModel.estatisticas();

      if (!estatistica) {
        res.status(400).json({ msg: "Erro nas estatísticas!" });
        return;
      }

      res.status(200).json(estatistica);
    } catch (error) {
      res.status(500).json({ msg: "Erro interno", erro: error.message });
    }
  }

}