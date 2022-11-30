import express from "express";
import {
  deleteCategory,
  getCategory,
  createCategory,
  updateCategory,
} from "../controllers/categoryController.js";
// import verifyAdmin from "../utils/verifyToken.js";
const router = express.Router();

//Create
router.post("/", createCategory);

// UPDATE
router.put("/:id", updateCategory);

//DELETE
router.delete("/:id", deleteCategory);

//GET ALL
router.get("/", getCategory);

export default router;
