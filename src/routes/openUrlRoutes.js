import express from "express";
import { openUrl } from "../controllers/openUrlController.js";
import { openUrlMiddleware} from "../middlewares/openUrlMiddleware.js"

const router = express.Router()

router.get("/urls/open/:shortUrl", openUrlMiddleware ,openUrl)


export default router