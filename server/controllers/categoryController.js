import Category from "../models/Category.js";

// @desc      Create one category
// @route     CREATE /api/categories
// @access    Admin/Private
export const createCategory = async (req, res, next) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    next(err);
  }
};

// @desc      Update category
// @route     UPDATE /api/categories/:id
// @access    Admin/Private
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

// @desc      Delete category
// @route     DELETE /api/categories/:id
// @access    Admin/Private
export const deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Categeory has been deleted");
  } catch (err) {
    next(err);
  }
};

// @desc      Get all category
// @route     GET /api/categories
// @access    Anyone
export const getCategory = async (req, res, next) => {
  try {
    const Categories = await Category.find().populate("items");
    res.status(200).json(Categories);
  } catch (err) {
    next(err);
  }
};
