import express from "express";
import { users } from "../controllers/usersController.js";
import { usersMiddleware } from "../middlewares/usersMiddleware.js"

const router = express.Router()

router.get("/users/me", usersMiddleware, users)

export default router