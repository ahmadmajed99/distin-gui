import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

import "./menu.css";

const Menu = () => {
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

  useEffect(() => {
    getAllCategory();
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
                          <div>
                            <div
                              style={{ padding: 8 }}
                              className="category-card"
                            >
                              <div>
                                <img
                                  src="https://via.placeholder.com/200x300"
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
                        ))}
                    </Carousel>
                    <div className="menuItems">
                      <div className="item-title">All</div>
                      <div className="menu__item">
                        <div className="image-item">
                          <img src="" alt="" />
                        </div>
                        <div className="item-details">
                          <h3>saj zaatar</h3>
                          <p>best pizza ever</p>
                        </div>
                        <div className="item-price">9 LBP</div>
                      </div>
                      <div className="menu__item">
                        <div className="image-item">
                          <img src="" alt="" />
                        </div>
                        <div className="item-details">
                          <h3>saj zaatar</h3>
                          <p>best pizza ever</p>
                        </div>
                        <div className="item-price">9 LBP</div>
                      </div>
                      <div className="menu__item">
                        <div className="image-item">
                          <img src="" alt="" />
                        </div>
                        <div className="item-details">
                          <h3>saj zaatar</h3>
                          <p>best pizza ever</p>
                        </div>
                        <div className="item-price">9 LBP</div>
                      </div>
                      <div className="menu__item">
                        <div className="image-item">
                          <img src="" alt="" />
                        </div>
                        <div className="item-details">
                          <h3>saj zaatar</h3>
                          <p>best pizza ever</p>
                        </div>
                        <div className="item-price">9 LBP</div>
                      </div>
                    </div>
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
