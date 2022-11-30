import Item from "../models/Item.js";

export const createItem = async (req, res, next) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
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
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getItem = async (req, res, next) => {
  try {
    const Items = await Item.find();
    res.status(200).json(Items);
  } catch (err) {
    next(err);
  }
};
