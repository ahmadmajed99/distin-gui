import Category from "../models/Category.js";

// @desc      Create one category
// @route     CREATE /api/categories
// @access    Admin/Private
export const createCategory = async (req, res, next) => {
  const { name } = req.body;
  const image = req.file.path;

  try {
    await Category.create({
      name: name,
      image: image,
    });
    return res.status(201).json({
      status: 201,
      success: true,
      data: "category added success",
    });
  } catch (err) {
    next(err);
  }
};

// @desc      Update category
// @route     UPDATE /api/categories/:id
// @access    Admin/Private
export const updateCategory = async (req, res, next) => {
  try {
    // const { id } = req.params;
    // const { name } = req.body;
    // let image = null;
    // if (req.file) {
    //   image = req.file.path;
    // } else {
    //   image = req.body.image;
    // }

    // try {
    //   await Category.findById(id);
    //   await Category.updateOne({
    //     name: name,
    //     image: image,
    //   });
    //   return res.status(201).json({
    //     status: 201,
    //     success: true,
    //     data: `category with ${id} edit success`,
    //   });
    // } catch (err) {
    //   next(200);
    // }

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
