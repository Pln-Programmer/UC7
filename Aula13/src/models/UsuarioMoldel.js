import { query } from "../Data/db.js";
import bcrypt from "bcrypt";

export default class UsuarioModel {

  static async listarVendedor(nome, email){
    const sql = `
    SELECT 
    nome, 
    email
    FROM vendas
    `
    const result = await query(sql, [nome, email]);
    return result.rows[0] ?? null;
  }

  static async BuscarPorEmail(email) {
    const sql = `
        SELECT *
        FROM usuarios
        WHERE email = $1
        `;
    const result = await query(sql, [email]);
    return result.rows[0] ?? null;
  }

  static async Criar( nome, email, senha, perfil ) {
    const senhahash = await bcrypt.hash(senha, 10);

    const sql = `
            INSERT INTO usuarios(
                nome,
                email,
                senha_hash,
                perfil
            )
            VALUES ($1, $2, $3, $4)
            RETURNING
                id,
                nome,
                email,
                perfil
        `;
    const dados = [nome, email, senhahash, perfil];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Atualizar(id, { nome, email, senha }) {
    const senhahash = await bcrypt.hash(senha, 10);

    const sql = `
            UPDATE usuarios
            SET
                nome = $1,
                email = $2,
                senha_hash = $3
            WHERE id = $4
            RETURNING
                nome,
                email
        `;
    const dados = [nome, email, senhahash, id];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Deletar(id) {
    const sql = `
            DELETE FROM usuarios
            WHERE id = $1
        `;
    const result = await query(sql, [id]);
    return result ?? null;
  }
}
