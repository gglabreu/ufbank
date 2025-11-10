import { Router } from "express";
import { HealthController } from "../controller/HealthController";

const router = Router();

router.post("/health", HealthController.handle);

export default router;