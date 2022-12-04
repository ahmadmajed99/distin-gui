import React from "react";
import "./place.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Dashboard = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/place");

  console.log(data);

  const [place, setPlace] = useState({
    name: `${data.name}`,
    slug: `${data.slug}`,
    desc: `${data.desc}`,
    location: `${data.location}`,
  });

  const handleChange = (e) => {
    setPlace((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const editPlace = async () => {
    await axios
      .put(`http://localhost:5000/api/place/${data._id}`, {
        name: data[0].name,
        slug: data.slug,
        description: data.desc,
        location: data.location,
      })
      .catch((err) => console.log(err));
    // props.setReload(props.data);
  };

  return (
    <div className="place">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="placeTitle">Your Place</h1>
          <div className="formPlaceContainer">
            <h2 className="left">Edit your place</h2>
            <form className="loginForm">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
                  value={place.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Slug</h3>
                <input
                  type="text"
                  name="slug"
                  value={place.slug}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Description</h3>
                <input
                  type="text"
                  name="desc"
                  value={place.desc}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Location</h3>
                <input
                  type="text"
                  name="location"
                  value={place.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Logo</h3>
                <input type="file" value={place.logo} onChange={handleChange} />
              </label>
              <button className="updateBtn" onClick={editPlace}>
                Update place
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
