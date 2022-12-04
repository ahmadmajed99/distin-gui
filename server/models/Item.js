import mongoose from "mongoose";

var Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: String,

    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },

  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
