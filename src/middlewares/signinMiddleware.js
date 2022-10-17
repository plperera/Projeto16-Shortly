import { connection } from "../database/db.js";
import {signinSCHEMA} from "../schemas/signinSCHEMA.js"

import bcrypt from 'bcrypt';

async function signinMiddleware (req, res, next){

    const isValid = signinSCHEMA.validate(req.body, {abortEarly: false })

    if (isValid.error){
        return res.status(422).send(isValid.error.message)
    }

    const { email, password } = req.body

    try {

        const user = await connection.query(`SELECT * FROM users WHERE email=$1;`, [email])

        if (user.rows[0] === undefined || !(bcrypt.compareSync(password, user.rows[0].password))){
            return res.sendStatus(401)
        }

        next()
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export {signinMiddleware}