import { query } from "../Data/db.js"

export default class ClienteModel{

    static async BuscarPorEmail(){
        const sql = `
        SELECT *
        FROM clientes
        WHERE email = $1
        `;
        const result = await query(sql, [email]);
        return result.rows(0) ?? null;
    }

    static async Criar({ nome, documento, email, telefone }){

        const sql = `
            INSERT INTO
                nome,
                documento,
                email,
                telefone
            VALUES ($1, $2, $3, $4)
            RETURNING
                nome,
                documento,
                email,
                telefone
        `;
        const dados = [nome, documento, email, telefone];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Atualizar(id, { nome, documento, email, telefone }){

        const sql = `
            UPDATE
                nome = $1,
                documento = $2,
                email = $3,
                telefone = $4
            WHERE id = $5
            RETURNING
                nome,
                documento,
                email,
                telefone
        `;
        const dados = [nome, documento, email, telefone, id];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Deletar(id){
        const sql = `
            DELETE FROM clientes
            WHERE id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows(0) ?? null;
    }
}