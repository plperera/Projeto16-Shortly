import express from "express";
import { users, usersRanking } from "../controllers/usersController.js";
import { usersMiddleware } from "../middlewares/usersMiddleware.js"

const router = express.Router()

router.get("/users/me", usersMiddleware, users)
router.get("/ranking", usersRanking)

export default router