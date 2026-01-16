import UsuarioModel from "../models/UsuarioMoldel.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

export default class UsuarioController {
  static async Criar(req, res) {
    try {
      const { nome, email, senha, perfil } = req.body;

      if (!nome || !email || !senha) {
        return res
          .status(400)
          .json({
            msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas",
          });
      }
      const verificar = await UsuarioModel.BuscarPorEmail(email);
      if (verificar) {
        return res.status(400).json({ msg: "Email já cadastrado" });
      }
      const novoUsuario = await UsuarioModel.Criar(nome, email, senha, perfil);

      return res
        .status(201)
        .json({ msg: "Usuário criado com sucesso", usuario: novoUsuario });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno ao criar o usuario", erro: error.message });
    }
  }

  static async Atualizar(req, res) {
    try {
      const id = req.params.id;
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res
          .status(400)
          .json({
            msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas",
          });
      }
      const usuarioAtualizado = await UsuarioModel.Atualizar(id, {
        nome,
        email,
        senha,
      });
      return res
        .status(201)
        .json({
          msg: "Usuário Atualizado com sucesso",
          usuario: usuarioAtualizado,
        });
    } catch (error) {
      res
        .status(500)
        .json({
          msg: "Erro interno ao atualizar o usuario",
          erro: error.message,
        });
    }
  }

  static async Deletar(req, res) {
    try {
      const id = req.params.id;
      const status = await UsuarioModel.Deletar(id);
      if (!status) {
        return res.status(404).json({ msg: "Usuário não encontrado!" });
      }
      res.status(200).json({ msg: "Usuário excluido!" });
    } catch (error) {
      res
        .status(500)
        .json({
          msg: "Erro interno ao deletar o usuario",
          erro: error.message,
        });
    }
  }

  static async Login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({ msg: "Email e senha são obrigatórios!" });
      }

      const usuario = await UsuarioModel.BuscarPorEmail(email);
      if (!usuario) {
        return res.status(401).json({ msg: "Email ou senha inválidos!" });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
      if (!senhaValida) {
        return res.status(401).json({ msg: "Email ou senha inválidos!" });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          perfil: usuario.perfil
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res
        .status(200)
        .json({ msg: "Login realizado com sucesso!", token });
    } catch (error) {
      return res.status(500).json({
        msg: "Erro interno ao autenticar o usuário",
        erro: error.message,
      });
    }
  }
}
