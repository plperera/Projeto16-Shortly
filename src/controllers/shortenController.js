import {connection} from '../database/db.js';
import { nanoid } from 'nanoid';

async function shortenUrl(req, res) {

    const {url} = req.body
    const token = req.headers.authorization?.replace("Bearer ", "")
    const shortUrl = nanoid(8)  

    try {    

        const user = await connection.query(`SELECT "userId" FROM tokens WHERE token=$1`, [token])
        await connection.query(`INSERT INTO links ("userId", "linkUrl", "linkCode") VALUES ($1, $2, $3)`, [user.rows[0].userId, url, shortUrl])

        res.send({"shortUrl":shortUrl}).status(201)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
   
}

async function shortenUrlGet(req, res) {

    const teste = await connection.query('SELECT * FROM tokens;')
    res.send(teste.rows)

}
async function deleteUrl (req, res){
    
    const linkId = req.params.id

    try {
        await connection.query(`DELETE FROM links WHERE id = $1;`,[linkId])
        res.sendStatus(204)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
/*
async function searchForShortUrl (){

    const shortUrl = Math.floor(Math.random() * 2) + "a"
    const hasShortUrl = await connection.query(`SELECT * FROM links WHERE "linkCode"=$1;`, [shortUrl])

    if (!hasShortUrl.rows[0]){
        console.log("deu usando: "+ shortUrl) 
        return shortUrl
    } else {
        console.log("nao deu com: " + shortUrl)
        searchForShortUrl()
    }
}
*/

export {shortenUrl, shortenUrlGet, deleteUrl}