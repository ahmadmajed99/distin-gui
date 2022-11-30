import express from "express";
import {
  createPlace,
  getPlace,
  updatePlace,
} from "../controllers/placeController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createPlace);

router.put("/:id", verifyAdmin, updatePlace);

router.get("/", getPlace);

export default router;
