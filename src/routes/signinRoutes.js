import express from "express";
import { signin, signinGet } from "../controllers/signinController.js";

const router = express.Router()

router.get("/signin", signinGet)
router.post("/signin", signin)


export default router