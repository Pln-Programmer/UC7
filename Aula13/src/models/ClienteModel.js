import { query } from "../Data/db.js";

export default class ClienteModel {

  static async read({ nome, documento, email, telefone }){
    const sql = `
      SELECT nome, 
      documento, 
      email, 
      telefone
      FROM clientes
    `;
    const result = await query (sql, [nome, documento, email, telefone]);
    return result.rows[0] ?? null;
  }

  static async BuscarPorEmail(email) {
    const sql = `
        SELECT *
        FROM clientes
        WHERE email = $1
        `;
    const result = await query(sql, [email]);
    return result.rows[0] ?? null;
  }

  static async Criar({ nome, documento, email, telefone }) {
    const sql = `
            INSERT INTO clientes(
                nome,
                documento,
                email,
                telefone
            )
            VALUES ($1, $2, $3, $4)
            RETURNING
                id,
                nome,
                documento,
                email,
                telefone
        `;
    const dados = [nome, documento, email, telefone];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Atualizar(id, { nome, documento, email, telefone }) {
    const sql = `
            UPDATE clientes
            SET
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

  static async Deletar(id) {
    const sql = `
            DELETE FROM clientes
            WHERE id = $1
        `;
    const result = await query(sql, [id]);
    return result ?? null;
  }
}
