import axios from "axios";

// Import Material UI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";

import React from "react";

const DeleteItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DeleteItems = async () => {
    // if (props.category._id) {
    // console.log("you can't delete items has category");
    // } else {
    const del = await axios.delete(
      `http://localhost:5000/api/items/${props.cat._id}`
    );
    console.log(del);
    handleClose();
    window.reload();
    // }
  };

  return (
    <div>
      {/* <button onClick={handleClickOpen}> */}
      <AiTwotoneDelete
        onClick={handleClickOpen}
        size={27}
        className="iconss__func"
      />
      {/* </button> */}
      <Dialog
        maxWidth={"md"}
        sx={{ overflowY: "scroll" }}
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <p>Are you sure you want to delete it?</p>
          <br />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={DeleteItems}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteItem;
