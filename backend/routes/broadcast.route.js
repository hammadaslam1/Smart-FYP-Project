import express from "express";
import { getAllBroadcasts, insertBroadcast } from "../controllers/broadcast.controller.js";

const router = express.Router();
router.post("/insertbroadcast", insertBroadcast);
router.post("/getallbroadcasts", getAllBroadcasts);

export default router;
