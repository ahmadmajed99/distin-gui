import Category from "../models/Category.js";

export const createCategory = async (req, res, next) => {
  const newCategory = newCategory(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const updateCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCategory);
  } catch (err) {
    next(err);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Data has been deleted");
  } catch (err) {
    next(err);
  }
};

export const getCategory = async (req, res, next) => {
  try {
    const Category = await Category.find();
    res.status(200).json(Category);
  } catch (err) {
    next(err);
  }
};
