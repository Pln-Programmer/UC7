import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
    adapter: {
        provider: 'postgres',
    url: process.env.DATABASE_URL}
});

export default prisma;