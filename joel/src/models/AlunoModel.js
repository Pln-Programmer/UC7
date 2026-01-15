import prisma from "../infra/prisma.js";

export default class AlunoModel{

    static async listar(){
        return prisma.aluno.findMany();
    }
    static async buscarPorId(id){
        return prisma.aluno.findUnique(
            {
                where: {id: Number(id)}
            }
        )
    }
    static async criar(dados){
        return prisma.aluno.create(
            {
                data: dados
            }
        )
    }

}