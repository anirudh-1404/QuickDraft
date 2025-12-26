import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import {
  createReport,
  deleteReport,
  getMyReports,
  getReportById,
} from "../controllers/reportController.js";

const route = express.Router();

route.post("/create", protectRoute, createReport);
route.get("/my", protectRoute, getMyReports);
route.get("/:id", protectRoute, getReportById);
route.delete("/:id", protectRoute, deleteReport);

export default route;
