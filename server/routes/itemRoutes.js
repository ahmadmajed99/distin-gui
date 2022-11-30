import express from "express";
import {
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createItem);

router.put("/:id", verifyAdmin, updateItem);

router.delete("/:id", verifyAdmin, deleteItem);

router.get("/", getItem);

export default router;
