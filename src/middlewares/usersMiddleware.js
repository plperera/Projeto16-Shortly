import { connection } from "../database/db.js";

async function usersMiddleware (req, res, next){

    const token = req.headers.authorization?.replace("Bearer ", "")
    const id = req.params.id
    
    if (!token) {
        res.sendStatus(401)
    }
    

    try {
        const hasAccess = await connection.query("SELECT * FROM tokens WHERE token=$1;",[token])
        
        if(!hasAccess.rows[0]){
            res.sendStatus(404)
        } else {
            
            next()   
        }


    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
    
    //next()
 
}
export {usersMiddleware}