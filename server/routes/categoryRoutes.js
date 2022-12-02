import express from "express";
import {
  deleteCategory,
  getCategory,
  createCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", verifyAdmin, createCategory);

// UPDATE
router.put("/:id", verifyAdmin, updateCategory);

//DELETE
router.delete("/:id", verifyAdmin, deleteCategory);

//GET ALL
router.get("/", getCategory);

export default router;
