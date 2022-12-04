import { CircularProgress } from "@mui/material";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress className="loader" />
    </div>
  );
};

export default Loader;
