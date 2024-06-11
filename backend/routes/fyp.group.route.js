import express from "express";
import { getGroups, insertGroup, updateGroup } from "../controllers/fyp.group.controller.js";

const router = express.Router();

router.post("/insertgroup", insertGroup);
router.get("/getgroups", getGroups);
router.put("/updategroup/:id", updateGroup);

export default router;
