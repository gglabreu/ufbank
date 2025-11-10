import { Router } from "express";
import { HelloController } from "../controller/HelloController";

const router = Router();
router.get("/hello", HelloController.handle);
export default router;