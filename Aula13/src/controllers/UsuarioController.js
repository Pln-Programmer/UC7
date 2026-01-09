import UsuarioModel from "../models/UsuarioMoldel.js";
import bcrypt from 'bcrypt'
import 'dotenv/config'

export default class UsuarioController{

    static async Criar(req, res){
        try {
            const {nome, email, senha} = req.body

            if(!nome || !email ||  !senha){
                return res.status(400).json({msg: "Dados obrigatorios não informados! Por favor, verifique se todas as informações obrigatorias estão preenchidas"})
            }
            const usuario = await UsuarioModel.Criar()
        } catch (error) {
            
        }
    }
}