import Item from "../models/Item";

export const createItem = async (req, res, next) => {
  const newItem = newItem(req.body);

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
    res.status(200).json("Data has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getItem = async (req, res, next) => {
  try {
    const Item = await Item.find();
    res.status(200).json(Item);
  } catch (err) {
    next(err);
  }
};
