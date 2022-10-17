import express from "express";
import { signin, signinGet } from "../controllers/signinController.js";
import { signinMiddleware } from "../middlewares/signinMiddleware.js"


const router = express.Router()

//router.get("/signin", signinGet)
router.post("/signin", signinMiddleware, signin)


export default router