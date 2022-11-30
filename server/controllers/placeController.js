import Place from "../models/Place.js";

//Create
export const createPlace = async (req, res, next) => {
  const newPlace = new Place(req.body);
  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    next(err);
  }
};

// UPDATE
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

//GET ALL
export const getPlace = async (req, res, next) => {
  try {
    const Places = await Place.find();
    res.status(200).json(Places);
  } catch (err) {
    next(err);
  }
};
