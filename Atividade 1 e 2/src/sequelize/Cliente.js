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
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 100],
          msg: 'O nome deve ter entre 5 e 100 caracteres.'
        },
        notEmpty: {
          msg: 'O campo de nome não pode ser vazio.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'O email deve ser um endereço de email válido.'
        }
      }
    },
    documento: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: {
                msg: 'O documento informado não pode possuir letras.'
            }
        }
    },
    telefone: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
            isNumeric: {
                msg: 'O telefone deve haver apenas numeros.'
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