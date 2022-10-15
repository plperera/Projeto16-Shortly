import express from "express";
import { shortenUrl } from "../controllers/shortenController.js";
import { shortenMiddleware, getUrlMiddleware } from "../middlewares/shortenMiddleware.js"

const router = express.Router()

router.get("/urls/:id", getUrlMiddleware)
router.post("/urls/shorten", shortenMiddleware, shortenUrl)


export default router