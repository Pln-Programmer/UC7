import prisma from "../infra/prisma.js";

export default class UsuarioModel{

    static async listar(){
        return prisma.usuario.findMany();
    }
    static async buscarPorId(id){
        return prisma.usuario.findUnique(
            {
                where: {id: Number(id)}
            }
        )
    }
    static async criar(dados){
        return prisma.usuario.create(
            {
                data: dados
            }
        )
    }

}