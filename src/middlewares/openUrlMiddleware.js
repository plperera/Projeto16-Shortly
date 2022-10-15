import { connection } from "../database/db.js";
import {openUrlSCHEMA} from "../schemas/openUrlSCHEMA.js"

async function openUrlMiddleware (req, res, next){
    
    const isValid = openUrlSCHEMA.validate(req.params, {abortEarly: false })

    if (isValid.error){
        return res.status(422).send(isValid.error.message)
    }

    const {shortUrl} = req.params
    console.log(shortUrl)
    
    try {
        
        const hasShortUrl = await connection.query(`SELECT * FROM links WHERE "shortUrl"=$1;`, [shortUrl])

        if (!hasShortUrl.rows[0]){
            res.send(404)
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
    //next()
}

export {openUrlMiddleware}