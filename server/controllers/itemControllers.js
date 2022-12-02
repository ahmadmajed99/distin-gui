import Item from "../models/Item.js";
import Category from "../models/Category.js";

export const createItem = async (req, res, next) => {
  const categoryId = req.params.categoryid;
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    try {
      await Category.findByIdAndUpdate(categoryId, {
        $push: {
          items: savedItem._id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedItem);
  } catch (err) {
    next(err);
  }
};

export const updateItem = async (req, res, next) => {
  try {
    const updateItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateItem);
  } catch (err) {
    next(err);
  }
};

export const deleteItem = async (req, res, next) => {
  const categoryId = req.params.categoryid;

  try {
    await Item.findByIdAndDelete(req.params.id);
    try {
      await Category.findByIdAndUpdate(categoryId, {
        $pull: {
          items: savedItem.req.params.id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Item has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getItem = async (req, res, next) => {
  try {
    const Items = await Item.find().populate("category");
    res.status(200).json(Items);
  } catch (err) {
    next(err);
  }
};
