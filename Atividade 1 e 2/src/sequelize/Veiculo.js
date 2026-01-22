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
    marca: {
        type: DataTypes. STRING,
        validate: {
            notEmpty: {
                msg: "O campo de marca não pode ser vazio."
            }
        }
    },
    modelo: {
        type: DataTypes. STRING,
        validate: {
            notEmpty: {
                msg: "O campo de marca não pode ser vazio."
            }
        }
    },
    ano: {
        type: DataTypes. INTEGER,
        validate: {
            isDate: {
                msg: "O ano deve ser uma data valida"
            }
        }
    },
    preco: {
        type: DataTypes. DECIMAL,
        validate: {
            isDecimal: {
                msg: 'Ops — informe um valor decimal válido para o Preço, por exemplo 12.34.'
            }
        }
    },
    status: {
        type: DataTypes. ENUM('Vendido', 'Disponivel', 'Reservado'),
        validate: {
            isIn: {
               args: [['Vendido', 'Disponivel', 'Reservado']],
               msg: 'Status invalido!'
            }
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