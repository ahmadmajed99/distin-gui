import express from "express";
import {
  createPlace,
  getPlace,
  updatePlace,
} from "../controllers/placeController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", getPlace);

router.post("/", createPlace);

router.put("/:id", updatePlace);

export default router;
