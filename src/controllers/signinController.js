import {connection} from '../database/db.js';

async function signin(req, res) {

    const {email, password} = req.body
    const token = "adwkodkow"
    const time = 11111
    
    try {

        const user = await connection.query(`SELECT id FROM users WHERE email=$1;`, [email])

        await connection.query(`INSERT INTO tokens ("userId",token,time) VALUES ($1, $2, $3)`, [user.rows[0].id, token, time])

        res.send(user)
        //res.sendStatus(200)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)

    }
}

async function signinGet(req, res) {

    const teste = await connection.query('SELECT * FROM tokens')
    res.send(teste.rows)

}

export {signin, signinGet}