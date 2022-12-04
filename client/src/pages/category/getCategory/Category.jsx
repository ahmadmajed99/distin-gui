import "./category.css";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import EditCategory from "../editCategory/EditCategory";
import Loader from "../../../components/loader/Loader";
import DeleteCategory from "../deleteCategory/DeleteCategory";
// import Img from "../../../../public/upload/";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const [file, setFile] = useState(null);

  const [addCat, setAddcat] = useState({
    name: "",
    image: "",
  });
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:5000/api/categories"
  );

  console.log(data);

  // const token = localStorage.getItem("user");

  const handleChange = (e) => {
    setAddcat((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formData = new formData();
    formData.append("name", addCat.name);
    formData.append("image", addCat.image);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/categories",
        formData
        // { withCredentials: true }
      );
      console.log(addCat);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="category">
      <h1>Your Category</h1>
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
                          src={`http://localhost:5000/${cat.image}`}
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
                            <DeleteCategory
                              cat={cat}
                              reFetch={reFetch}
                              styles={{ fontSize: "2rem" }}
                            />
                          </div>
                          <div className="edit-category">
                            <EditCategory cat={cat} reFetch={reFetch} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="add-category-form-container" id="form">
            <h2 className="left">Add category</h2>
            <form className="add-category-form">
              <label htmlFor="" className="labelPlace">
                <h3>Name</h3>
                <input
                  type="text"
                  name="name"
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
              <button className="updateBtn" onClick={handleAddCategory}>
                Add Category
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
