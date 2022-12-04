import "./deleteCategory.css";
import axios from "axios";

// Import Material UI
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { AiTwotoneDelete } from "react-icons/ai";
import { useState } from "react";

const DeleteCategory = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const token = localStorage.getItem("token");

  const DeleteCategory = async () => {
    await axios.delete(`http://localhost:5000/api/categories/${props.cat._id}`);
    handleClose();
    window.reload();
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
          <Button onClick={DeleteCategory}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteCategory;
