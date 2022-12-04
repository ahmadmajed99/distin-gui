import express from "express";
import {
  createItem,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/itemControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:categoryid", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

router.get("/", getItem);

export default router;
