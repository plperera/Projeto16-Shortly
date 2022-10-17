import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const { Pool } = pg;

const connection = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
});

export {connection};