import { Router } from "express";
import * as taskCtrl from "../controllers/task.controller";

const router = Router();

router.post("/", taskCtrl.createTask);

router.get("/", taskCtrl.findAllTask);

router.get("/done", taskCtrl.findAllDoneTasks);

router.get("/:id", taskCtrl.findOneTask);

router.delete("/:id", taskCtrl.deleteTask);

router.put("/:id", taskCtrl.updateTask);

export default router;