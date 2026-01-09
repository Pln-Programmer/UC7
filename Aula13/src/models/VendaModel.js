import { query } from "../Data/db.js"

export default class VendaModel{

    static async Criar({ veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, obsercacoes }){

        const sql = `
            INSERT INTO
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                obsercacoes
            VALUES ($1, $2, $3, $4, $5)
            RETURNING
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                obsercacoes
                
        `;
        const dados = [veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, obsercacoes];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Atualizar(id, { veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, obsercacoes }){

        const sql = `
            UPDATE
                veiculo_id = $1, 
                cliente_id = $2, 
                vendedor_id = $3, 
                valor_final = $4, 
                data_venda = $5, 
                forma_pagamento = $6,
                status = $7, 
                obsercacoes = $8
            WHERE id = $9
            RETURNING
                veiculo_id, 
                cliente_id, 
                vendedor_id, 
                valor_final, 
                data_venda, 
                forma_pagamento,
                status, 
                obsercacoes
        `;
        const dados = [veiculo_id, cliente_id, vendedor_id, valor_final, data_venda, forma_pagamento, status, obsercacoes];
        const result = await query(sql, dados);
        return result.rows[0] ?? null;
    }

    static async Deletar(id){
        const sql = `
            DELETE FROM vendas
            WHERE id = $1
        `;
        const result = await query(sql, [id]);
        return result.rows(0) ?? null;
    }
}