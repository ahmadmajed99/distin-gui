import express from "express";
import {
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/itemControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:categoryid", verifyAdmin, createItem);

router.put("/:id", verifyAdmin, updateItem);

router.delete("/:id/:categoryid", verifyAdmin, deleteItem);

router.get("/", getItem);

export default router;
