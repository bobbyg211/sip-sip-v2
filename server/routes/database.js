import { Router } from "express";
import { getPrompt } from "../controllers/database.js";

const router = Router();

router.get("/prompt", getPrompt);

export default router;
