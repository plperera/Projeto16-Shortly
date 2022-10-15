import { connection } from "../database/db.js";
import {shortenSCHEMA, findUrlSCHEMA} from "../schemas/shortenSHEMA.js"

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
async function getUrlMiddleware (req, res, next){
    
    const isValid = findUrlSCHEMA.validate(req.params, {abortEarly: false })

    if (isValid.error){
        return res.status(422).send(isValid.error.message)
    }

    const id = req.params.id

    try {

        const hasLinkId = await connection.query(`SELECT * FROM links WHERE id=$1`, [id])

        if (!hasLinkId.rows[0]){
            res.sendStatus(404)
        } else {
            res.send(hasLinkId.rows[0])
        }
        
    } catch (error) {
        
    }
    res.send(id)
}
export {shortenMiddleware, getUrlMiddleware}