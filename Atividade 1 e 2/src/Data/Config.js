import { Sequelize } from 'sequelize'
import "dotenv/config"

const sequelize = new Sequelize(process.env.DATABASE_URL)

try {
  await sequelize.authenticate();
  console.log('Processo realizado com sucesso.');
} catch (error) {
  console.error('Erro ao conectar com o banco.', error);
}

export default sequelize;