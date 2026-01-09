import { query } from "../Data/db.js"
import bcrypt from "bcrypt"

export default class UsuarioModel{

    static async BuscarPorEmail(){
        const sql = `
        SELECT *
        FROM usuarios
        WHERE email = $1
        `;
        const result = await query(sql, [email]);
        return result.rows(0) ?? null;
    }

    static async Criar({ nome, email, senha }){
        const senhahash = await bcrypt.hash(senha, 10);

        const sql = `
            INSERT INTO
                nome,
                email,
                senha_hash
            VALUES ($1, $2, $3)
            RETURNING
                id,
                nome,
                email
        `;
        const dados = [nome, email, senhahash];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Atualizar(id, { nome, email, senha }){
        const senhacompare = await bcrypt.compare(senha, hash);

        const sql = `
            UPDATE
                nome = $1,
                email = $2,
                senha_hash = $3
            WHERE id = $4
            RETURNING
                nome,
                email
        `;
        const dados = [nome, email, senhacompare, id];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Deletar(id){
        const sql = `
            DELETE FROM usuarios
            WHERE id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows(0) ?? null;
    }
}