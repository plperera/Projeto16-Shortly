import {connection} from '../database/db.js';
import { nanoid } from 'nanoid';

async function openUrl(req, res) {

    const {shortUrl} = req.params
    const time = Date.now()
 
    try {
        const links = await connection.query(`SELECT * FROM links WHERE "shortUrl"=$1;`, [shortUrl])
        res.redirect(links.rows[0].linkUrl)
        await connection.query(`UPDATE links SET "accessCount"=$1 WHERE "shortUrl"=$2;`, [(links.rows[0].accessCount + 1), shortUrl])
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
}

export {openUrl}