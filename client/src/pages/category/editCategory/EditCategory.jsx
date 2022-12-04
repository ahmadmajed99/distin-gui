import React from "react";
import "./editcategory.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const EditCategory = (props) => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState({
    name: `${props.cat.name}`,
    // image: `${props.image}`,
  });

  const token = localStorage.getItem("user");

  const handleChange = (e) => {
    setCategory((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const editCategory = async () => {
    await axios
      .put(
        `http://localhost:5000/api/categories/${props.cat._id}`,
        {
          name: category.name,
          // image: category.image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => setOpen(false))
      .catch((err) => console.log(err));
    // props.reFetch;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AiFillEdit
        onClick={handleClickOpen}
        size={30}
        className="iconss__func"
      />
      <Dialog maxWidth={"md"} open={open} onClose={handleClose}>
        <DialogContent>
          <div className="add-category-form-container" id="form">
            <h2 className="left">Add category</h2>
            <form className="add-category-form">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
                  value={category.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Image</h3>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  // required
                />
              </label>
              <button className="updateBtn" onClick={editCategory}>
                Update category
              </button>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose} className="dialog__buttons">
            Cancel
          </button>
          <button className="dialog__buttons">Edit</button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditCategory;
