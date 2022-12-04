import mongoose from "mongoose";

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      Required: true,
    },
    slug: {
      type: String,
      Required: true,
    },
    desc: {
      type: String,
      Required: true,
    },
    location: {
      type: String,
      Required: true,
    },
    logo: String,
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", placeSchema);

export default Place;
