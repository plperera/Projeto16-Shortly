import express from 'express';
import cors from 'cors';
import statusRoute from './routes/statusRoutes.js';
import signupRoute from './routes/signupRoutes.js';
import signinRoute from './routes/signinRoutes.js';
import shortenRoute from './routes/shortenRoutes.js';


const server = express()
server.use(express.json())
server.use(cors());

server.use(statusRoute)

server.use(signupRoute)
server.use(signinRoute)

server.use(shortenRoute)



server.listen(4000, () => console.log("Ola console, estou escutando a porta: 4000"))