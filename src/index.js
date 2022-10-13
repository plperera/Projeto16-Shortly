import express from 'express';

const server = express()

server.get("/status", (req, res) => {
    res.send("foi")
})

server.listen(4000, () => console.log("Ola console, estou escutando a porta: 4000"))