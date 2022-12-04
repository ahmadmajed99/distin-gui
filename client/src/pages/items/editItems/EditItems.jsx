import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const EditItems = (props) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    name: `${props.cat.name}`,
    desc: `${props.cat.desc}`,
    price: `${props.cat.price}`,
    category: `${props.category}`,
    image: `${props.image}`,
  });

  const token = localStorage.getItem("user");

  const handleChange = (e) => {
    setItem((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const editItem = async () => {
    await axios
      .put(`http://localhost:5000/api/items/${props.cat._id}`, {
        name: item.name,
        desc: item.desc,
        price: item.price,
        // image: category.image,
      })
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
            <h2 className="left">Add Item</h2>
            <form className="add-category-form">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Description</h3>
                <input
                  type="text"
                  name="desc"
                  value={item.desc}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Price</h3>
                <input
                  type="text"
                  name="price"
                  value={item.price}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Image</h3>
                <input type="file" name="image" onChange={handleChange} />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Select category</h3>
                <select
                  name="category"
                  onChange={handleChange}
                  // value={category_id}
                  // onChange={(e) => setCategory(e.target.value)}
                  selected
                >
                  {props.category &&
                    props.category.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </label>
              <button className="updateBtn" onClick={editItem}>
                Add Item
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

export default EditItems;
