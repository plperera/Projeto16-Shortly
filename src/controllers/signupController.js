import {connection} from '../database/db.js';

async function signup(req, res) {

    const {name, email, password} = req.body

    try {

        await connection.query(`INSERT INTO users (name,email,password) VALUES ($1, $2, $3);`, [name, email, password])
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