import { useRef } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="sidebar">
      <div className="nav" ref={navRef}>
        <div className="logo">
          <img src="./assets/logoMenu.jpeg" alt="" className="logoImg" />
        </div>
        <div className="navBar">
          <a href="/">Place</a>
          <a href="/categories">Categories</a>
          <a href="/items">Items</a>
          <a href="/menu">Menu</a>
          <button className="btnLogout">Logout</button>
        </div>

        {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button> */}
      </div>
      <img src="assets/timeducationLogo.png" alt="logo" className="logo" />
      {/* <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button> */}
    </div>
  );
};

export default Sidebar;
