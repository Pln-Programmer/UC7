import sequelize from '../Data/Config.js';
import { DataTypes } from "sequelize";

const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: {
          args: 4,
          msg: 'O id deve ser um UUID válido.'
        }
      }
    },
    valor_final: {
        type: DataTypes. DECIMAL,
        validate: {
            isDecimal: {
                msg: 'Ops — informe um valor decimal válido para o Valor final, por exemplo 12.34.'
            }
        }
    },
    data_venda: {
        type: DataTypes. DATE,
        validate: {
            isDate: {
                msg: 'Adicione uma data valida.'
            }
        }
    },
    status: {
        type: DataTypes. ENUM('Pendente', 'Confirmada', 'Cancelada'),
        validate: {
            isIn: {
               args: [['Pendente', 'Confirmada', 'Cancelada']],
               msg: 'Status invalido!'
            }
        }
    },
    observacao: {
        type: DataTypes.TEXT,
        validate: {
            len: [1, 200],
            msg: "A observação está excedendo o limete entre 1 e 200"
        }
    }
  },
  {
    tableName: 'usuarios',
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em',
    deletedAt: 'excluido_em'
  },
);