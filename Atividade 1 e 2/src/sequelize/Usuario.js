import sequelize from '../Data/Config.js';
import { DataTypes } from "sequelize";

const Usuario = sequelize.define(
  'Usuario',
  {
    // Model attributes are defined here
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
    senha_hash: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        is: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%?])[A-Za-z\d@#$%?]{8}$/,
        msg: ""
      }
    },
    perfil: {
      type: DataTypes.ENUM('admin', 'seller', 'client'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['admin', 'seller', 'client']],
          msg: 'Perfil invalido'
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