import { connection } from "../database/db.js";
import {signupSCHEMA} from "../schemas/signupSCHEMA.js"

async function signupMiddleware (req, res, next){

    const isValid = signupSCHEMA.validate(req.body, {abortEarly: false })

    if (isValid.error){
        return res.status(422).send(isValid.error.message)
    }

    const { name, email, password, confirmPassword } = req.body

    if (password !== confirmPassword){
        return res.send("senhas devem ser iguais").status(422)
    } 
    
    try {

        const hasUser = await connection.query(`SELECT * FROM users WHERE email=$1;`, [email])

        if (hasUser.rows[0] !== undefined){
            return res.sendStatus(409)
        }
        
        next()
        
    } catch (error) {

        console.log(error)
        return res.sendStatus(500)

    }

    
}
export {signupMiddleware}