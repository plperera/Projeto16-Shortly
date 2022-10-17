import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import statusRoute from './routes/statusRoutes.js';
import signupRoute from './routes/signupRoutes.js';
import signinRoute from './routes/signinRoutes.js';
import shortenRoute from './routes/shortenRoutes.js';
import openUrlRoute from './routes/openUrlRoutes.js';
import usersRoute from './routes/usersRoutes.js';

const server = express()
server.use(express.json())
server.use(cors());
dotenv.config()

server.use(statusRoute)

server.use(signupRoute)
server.use(signinRoute)

server.use(shortenRoute)

server.use(openUrlRoute)

server.use(usersRoute)

server.listen(process.env.PORT, () => console.log("Ola console, estou escutando a porta: " + process.env.PORT))