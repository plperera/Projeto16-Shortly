import express from "express";
import { signup, signupGet } from "../controllers/signupController.js";

const router = express.Router()

router.get("/signup", signupGet)
router.post("/signup", signup)


export default router