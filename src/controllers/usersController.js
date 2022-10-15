import {connection} from '../database/db.js';

async function users (req, res){
    
    const token = req.headers.authorization?.replace("Bearer ", "")

    try {
        //SELECT * FROM links WHERE "userId"=13;
        //pega todos links do usuario

        //SELECT access."linkId" ,COUNT(*) FROM access JOIN links ON links.id = access."linkId" GROUP BY access."linkId";
        //SELECT links."linkUrl", COUNT(*) FROM access JOIN links ON links.id = access."linkId" GROUP BY links."linkUrl";

        const userToken = await connection.query(`SELECT * FROM tokens WHERE token=$1`, [token])
        res.send(userToken.rows[0])

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export {users}