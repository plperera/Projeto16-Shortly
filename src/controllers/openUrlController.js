import {connection} from '../database/db.js';
import { nanoid } from 'nanoid';

async function openUrl(req, res) {

    const {shortUrl} = req.params
    const time = Date.now()
 
    try {
        const links = await connection.query(`SELECT * FROM links WHERE "linkCode"=$1;`, [shortUrl])
        res.redirect(links.rows[0].linkUrl)
        await connection.query(`INSERT INTO access ("linkId", date) VALUES ($1, $2)`, [links.rows[0].id, time])
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
}

export {openUrl}