import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.DATABASE_URL)

const { Pool } = pg;

const databaseConfig = {
    connectString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
};

const connection = new Pool (databaseConfig)

export {connection};