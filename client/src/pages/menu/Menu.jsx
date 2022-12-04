import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

import "./menu.css";

const Menu = () => {
  const [item, setItem] = useState([]);
  const [catData, setDatacat] = useState([]);
  const { data, loading, error } = useFetch("http://localhost:5000/api/place");

  console.log(data);

  const getAllCategory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      console.log(response.data);
      setDatacat(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllItem = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items");
      console.log(response.data);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllItem();
  }, []);

  return (
    <div className="menu">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <h1>Your Menu</h1>
          <div className="menuMain">
            <div className="menuCode"></div>
            <div className="mainMenuContainer">
              <div className="menuMenu">
                <div className="menuHero">
                  <div className="menuHeader" key={data._id}>
                    <div className="menuLogo">
                      <img
                        src="assets/logoMenu.jpeg"
                        alt="logo"
                        style={{ display: "block" }}
                      />
                    </div>
                    <div className="menuTitle">{data[0]?.name}</div>
                    <div className="menuDesc">{data[0]?.desc}</div>
                    <div className="menuLoc">
                      <i className="fa fa-map-marker"></i>
                      <h4>{data[0]?.location}</h4>
                    </div>
                  </div>
                  <div className="menuContent">
                    <Carousel show={3}>
                      {catData &&
                        catData.map((cat) => (
                          <a
                            href={`#${catData.name}`}
                            style={{
                              textDecoration: "none",
                              color: "black",
                              // marginBottom: "20px",
                            }}
                          >
                            <div>
                              <div
                                style={{ padding: 8 }}
                                className="category-card"
                              >
                                <div>
                                  <img
                                    src={`http://localhost:5000/${cat.image}`}
                                    alt="placeholder"
                                    style={{
                                      width: "100%",
                                      display: "block",
                                      aspectRatio: 1,
                                    }}
                                  />
                                </div>

                                <h3
                                  style={{
                                    fontSize: "0.8rem",
                                    fontWeight: "lighter",
                                  }}
                                >
                                  {cat.name}
                                </h3>
                              </div>
                            </div>
                          </a>
                        ))}
                    </Carousel>
                    {item &&
                      item.length > 0 &&
                      item.map((item, index) => (
                        <div
                          className="menuItems"
                          key={index}
                          id={`${catData.name}`}
                        >
                          {/* <div className="item-title">{item.name}</div> */}
                          <div className="menu__item">
                            <div className="image-item">
                              <img src="" alt="" />
                            </div>
                            <div className="item-details">
                              <h3>{item.name}</h3>
                              <p>{item.desc}</p>
                            </div>
                            <div className="item-price">{item.price}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
