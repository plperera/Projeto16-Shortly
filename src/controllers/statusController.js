import {connection} from '../database/db.js';

async function status(req, res) {

    const teste = await connection.query('SELECT * FROM teste')
    res.send(teste)

}

export {status}