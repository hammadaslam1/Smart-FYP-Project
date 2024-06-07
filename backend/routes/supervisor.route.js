import express from "express";
import {getSupervisors} from '../controllers/supervisors.controller.js';

const router = express.Router();

router.get("/getAllSupervisors", getSupervisors);

export default router;
