import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categories: {
      name: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      image: String,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
