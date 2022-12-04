import mongoose from "mongoose";

var Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },

    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
