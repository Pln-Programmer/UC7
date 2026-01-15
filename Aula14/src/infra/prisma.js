import pkg from '@prisma/client';
import { Prismapg } from '@prisma/adapter-pg';

const { PrismaClient } = pkg;
const pgAdapter = new Prismapg({
    connectionString: 'process.env.DATABASE_URL'
});

const prisma = new PrismaClient({
    adapter: pgAdapter
});

export default prisma;