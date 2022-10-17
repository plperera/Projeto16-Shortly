import {connection} from '../database/db.js';
import {v4 as uuid} from 'uuid'

async function signin(req, res) {

    const {email} = req.body
    const token = uuid()
    const time = Date.now()

    try {

        const user = await connection.query(`SELECT id FROM users WHERE email=$1;`, [email])

        await connection.query(`INSERT INTO tokens ("userId",token,"createdDate") VALUES ($1, $2, $3);`, [user.rows[0].id, token, time])

        res.send(token).status(200)
        //res.sendStatus(200)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)

    }
    
}

async function signinGet(req, res) {

    const teste = await connection.query('SELECT * FROM tokens;')
    res.send(teste.rows)

}

export {signin, signinGet}