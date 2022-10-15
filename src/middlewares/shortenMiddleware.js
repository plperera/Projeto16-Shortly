import { connection } from "../database/db.js";
import {shortenSCHEMA} from "../schemas/shortenSHEMA.js"

async function shortenMiddleware (req, res, next){
    
    const isValid = shortenSCHEMA.validate(req.body, {abortEarly: false })

    if (isValid.error){
        return res.status(422).send(isValid.error.message)
    }

    const token = req.headers.authorization?.replace("Bearer ", "")
    
    if (!token) {
        res.sendStatus(401)
    }

    try {
        
        const hasAccess = await connection.query("SELECT * FROM tokens WHERE token=$1",[token])
        
        if(!hasAccess.rows[0]){
            res.sendStatus(401)
        } else {

            next()

        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
    //next()
}
export {shortenMiddleware}