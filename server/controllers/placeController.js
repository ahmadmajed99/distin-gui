import Place from "../models/Place.js";

// @desc      Create place
// @route     CREATE /api/place
// @access    Admin/Private
export const createPlace = async (req, res, next) => {
  const newPlace = new Place(req.body);
  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    next(err);
  }
};

// @desc      Update place
// @route     UPDATE /api/place/:id
// @access    Admin/Private
export const updatePlace = async (req, res, next) => {
  try {
    const updatePlace = await Place.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatePlace);
  } catch (err) {
    next(err);
  }
};

// @desc      Get place
// @route     GET /api/place
// @access    Anyone
export const getPlace = async (req, res, next) => {
  try {
    const Places = await Place.find();
    res.status(200).json(Places);
  } catch (err) {
    next(err);
  }
};
