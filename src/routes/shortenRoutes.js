import express from "express";
import { shortenUrl, deleteUrl } from "../controllers/shortenController.js";
import { shortenMiddleware, getUrlMiddleware, deleteUrlMiddleware } from "../middlewares/shortenMiddleware.js"

const router = express.Router()

router.get("/urls/:id", getUrlMiddleware)
router.post("/urls/shorten", shortenMiddleware, shortenUrl)
router.delete("/urls/:id", deleteUrlMiddleware, deleteUrl)


export default router