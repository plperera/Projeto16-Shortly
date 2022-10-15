import express from "express";
import { users, usersRanking } from "../controllers/usersController.js";
import { usersMiddleware, usersRankingMiddleware } from "../middlewares/usersMiddleware.js"

const router = express.Router()

router.get("/users/me", usersMiddleware, users)
router.get("/ranking", usersRankingMiddleware, usersRanking)

export default router