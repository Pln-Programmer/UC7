import { query } from "../Data/db.js";

export default class VeiculoModel {

  static async listar(){
    const sql = `
      SELECT * FROM veiculos
      WHERE status = 'Disponivel'
    `;
    const result = await query (sql);
    return result.rows ?? null;
  }
  

  static async Criar({ marca, modelo, ano, preco, status }) {
    const sql = `
            INSERT INTO veiculos(
                marca,
                modelo,
                ano,
                preco,
                status
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING
                id,
                marca,
                modelo,
                ano,
                preco,
                status
        `;
    const dados = [marca, modelo, ano, preco, status];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Atualizar(id, { marca, modelo, ano, preco, status }) {
    const sql = `
            UPDATE veiculos
            SET
                marca = $1,
                modelo = $2,
                ano = $3,
                preco = $4,
                status = $5
            
            WHERE id = $6
            RETURNING
                marca,
                modelo,
                ano,
                preco,
                status
        `;
    const dados = [marca, modelo, ano, preco, status, id];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Deletar(id) {
    const sql = `
            DELETE FROM veiculos
            WHERE id = $1
        `;
    const result = await query(sql, [id]);
    return result ?? null;
  }
}
