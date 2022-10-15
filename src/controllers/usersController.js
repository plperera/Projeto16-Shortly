import {connection} from '../database/db.js';

async function users (req, res){
    
    const token = req.headers.authorization?.replace("Bearer ", "")

    try {
        
        const userToken = await connection.query(`SELECT * FROM tokens WHERE token=$1`, [token])

        const userInfo = await connection.query(`
            SELECT users.id, users.name, SUM(links."accessCount") AS "visitCount" 
                FROM users 
                    JOIN links ON users.id = links."userId" 
                        WHERE users.id=$1
                            GROUP BY users.id
        `,[userToken.rows[0].userId])

        const linksInfo = await connection.query(`
            SELECT id, "shortUrl", "linkUrl" AS "url", "accessCount" AS "visitCount" 
                FROM links 
                    WHERE "userId"=$1
        `,[userToken.rows[0].userId])

        res.send({...userInfo.rows[0], shortenedUrls:linksInfo.rows})

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export {users}