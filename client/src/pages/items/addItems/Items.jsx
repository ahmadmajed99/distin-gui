import React, { useState, useEffect } from "react";
import axios from "axios";

import useFetch from "../../../hooks/useFetch";
import Loader from "../../../components/loader/Loader";
import Carousel from "../../../components/carousel/Carousel";

import EditItems from "../editItems/EditItems";

import DeleteItem from "../deleteItems/DeleteItem";

const Items = () => {
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
  });

  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:5000/api/items"
  );

  const handleChange = (e) => {
    setItems((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(items);

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/items/${category._id}`,
        items
        // { withCredentials: true }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  async function getCategory() {
    try {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleAddItem();
    getCategory();
  }, []);

  return (
    <div className="category">
      <h1>Your Items</h1>
      <div className="category-header">
        <input type="search" placeholder="search for category" />
        <a href="#form" className="add-btn">
          Add
        </a>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="carousel-container">
            <Carousel show={4}>
              {data &&
                data.map((cat, index) => (
                  <div key={index}>
                    <div style={{ padding: 8 }} className="category-card">
                      <div className="card">
                        <img
                          src={cat.image}
                          alt="placeholder"
                          style={{
                            width: "100%",
                            display: "block",
                            aspectRatio: 1,
                          }}
                        />
                        <h3
                          style={{ fontSize: "1.5rem", fontWeight: "lighter" }}
                        >
                          {cat.name}
                        </h3>
                        <div className="category-icons">
                          <div className="delete-category">
                            <DeleteItem
                              cat={cat}
                              reFetch={reFetch}
                              category={category}
                              styles={{ fontSize: "2rem" }}
                            />
                            {/* <DeleteCategory
                              cat={cat}
                              reFetch={reFetch}
                              styles={{ fontSize: "2rem" }}
                            /> */}
                          </div>
                          <div className="edit-category">
                            <EditItems
                              cat={cat}
                              category={category}
                              reFetch={reFetch}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="add-category-form-container" id="form">
            <h2 className="left">Add Item</h2>
            <form className="add-category-form">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input type="text" name="name" onChange={handleChange} />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Description</h3>
                <input type="text" name="desc" onChange={handleChange} />
              </label>
              <label htmlFor="" className="labelPlace">
                <h3>Price</h3>
                <input type="text" name="price" onChange={handleChange} />
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
                  {category &&
                    category.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                </select>
                {/* <br /> */}
              </label>
              <button className="updateBtn" onClick={handleAddItem}>
                Add Item
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Items;
