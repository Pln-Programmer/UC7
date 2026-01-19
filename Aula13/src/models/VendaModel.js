import { query } from "../Data/db.js";

export default class VendaModel {

  static async listarGeral(){

  }

  static async listarCliente(id){
    const sql = `
    select * from vendas
    where 
    `
    const sql1 = `
      select nome from clientes
      where id = $1`
  }

  static async listarVendedor(){
    
  }

  static async Criar({
    veiculo_id,
    cliente_id,
    vendedor_id,
    valor_final,
    data_venda,
    forma_pagamento,
    status,
    observacoes,
  }) {
    const sql = `
            INSERT INTO vendas(
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                observacoes
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                observacoes

            UPDATE veiculos
            SET
                status = 'Reservado'
            WHERE id = $1
                
        `;
    const dados = [
      veiculo_id,
      cliente_id,
      vendedor_id,
      valor_final,
      data_venda,
      forma_pagamento,
      status,
      observacoes,
    ];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Atualizar(
    id,
    {
      veiculo_id,
      cliente_id,
      vendedor_id,
      valor_final,
      data_venda,
      forma_pagamento,
      status,
      observacoes,
    }
  ) {
    const sql = `
            UPDATE vendas
            SET
                veiculo_id = $1, 
                cliente_id = $2, 
                vendedor_id = $3, 
                valor_final = $4, 
                data_venda = $5, 
                forma_pagamento = $6,
                status = $7, 
                observacoes = $8
            WHERE id = $9
            RETURNING
                id,
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                observacoes
        `;
    const dados = [
      veiculo_id,
      cliente_id,
      vendedor_id,
      valor_final,
      data_venda,
      forma_pagamento,
      status,
      observacoes,
      id
    ];
    const result = await query(sql, dados);
    return result.rows[0] ?? null;
  }

  static async Deletar(id) {
     const sql1 = `
            select veiculo_id from vendas
            where id = $1
        `;
    const sql = `
            DELETE FROM vendas
            WHERE id = $1
        `;
   
    const slq2 = `
            UPDATE veiculos
            SET status = 'Disponivel'
            WHERE id = ${sql1}
        `;
      
    const result = await query(sql, [id]);
    return result ?? null;
  }
}
