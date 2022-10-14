import express from "express";
import { signup, signupGet } from "../controllers/signupController.js";
import { signupMiddleware } from "../middlewares/signupMiddleware.js"

const router = express.Router()

router.get("/signup", signupGet)
router.post("/signup", signupMiddleware, signup)


export default router