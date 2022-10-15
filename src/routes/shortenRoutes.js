import express from "express";
import { shortenUrl, shortenUrlGet } from "../controllers/shortenController.js";
import { shortenMiddleware } from "../middlewares/shortenMiddleware.js"

const router = express.Router()

router.get("/urls/shorten", shortenUrlGet)
router.post("/urls/shorten", shortenMiddleware, shortenUrl)


export default router