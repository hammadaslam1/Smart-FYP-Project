import express from "express";
import { getGroups, insertGroup, insertProjectIdea, updateGroup } from "../controllers/fyp.group.controller.js";

const router = express.Router();

router.post("/insertgroup", insertGroup);
router.get("/getgroups", getGroups);
router.put("/updategroup/:id", updateGroup);
router.post("/insertidea/:id", insertProjectIdea);

export default router;
