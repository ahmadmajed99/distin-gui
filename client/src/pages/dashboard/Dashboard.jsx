import React from "react";
import "./place.css";
import useFetch from "../../hooks/useEffect";

const Dashboard = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/place");

  // const handleUpdate = () => {}

  console.log(data);

  return (
    <div className="place">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <h1 className="placeTitle">Your Place</h1>
          <div className="formPlaceContainer">
            <h2 className="left">Edit your place</h2>
            <form className="loginForm">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input type="text" />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Slug</h3>
                <input type="text" />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Description</h3>
                <input type="text" />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Location</h3>
                <input type="text" />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Logo</h3>
                <input type="file" />
              </label>
              <button className="updateBtn">Update place</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
