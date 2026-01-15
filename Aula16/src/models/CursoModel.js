import prisma from '../infra/prisma.js';

export default class CursoModel{

    static async Criar(nome, descricao){
        return prisma.curso.create(
            {
                data: {nome, descricao}
            }
        )
    }
    static async Listar(){
        return prisma.curso.findMany({
            include: {aluno: true}
        });
    }

    static async BuscarPorId(id){
        return prisma.curso.findUnique(
            {
                where: {id},
                include: {aluno: true}
            }
        )}

        static async atualizar(id, nome, descricao){
            return prisma.curso.update(
                {
                    where: {id},
                    data: {nome, descricao}
                }
            )
        }
        static async deletar(id){
            return prisma.curso.delete(
                {
                    where: {id}
                }
            )
        }
    }
    