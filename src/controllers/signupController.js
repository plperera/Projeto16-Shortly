import {connection} from '../database/db.js';
import bcrypt from 'bcrypt';

async function signup(req, res) {

    const {name, email, password} = req.body

    const passwordHash = bcrypt.hashSync(password, 10)
    
    try {

        await connection.query(`INSERT INTO users (name,email,password) VALUES ($1, $2, $3);`, [name, email, passwordHash])
        res.sendStatus(201)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)

    }
    
}

async function signupGet(req, res) {
    const teste = await connection.query('SELECT * FROM users')
    res.send(teste.rows)
}

export {signup, signupGet}