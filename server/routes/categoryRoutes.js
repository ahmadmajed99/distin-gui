import express from "express";
import {
  deleteCategory,
  getCategory,
  createCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import upload from "../helper/multer.js";
const router = express.Router();

//Create
router.post("/", upload.single("image"), createCategory);

// UPDATE
router.put("/:id", upload.single("image"), updateCategory);

//DELETE
router.delete("/:id", deleteCategory);

//GET ALL
router.get("/", getCategory);

export default router;
