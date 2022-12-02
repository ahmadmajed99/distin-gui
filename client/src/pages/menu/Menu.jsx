import Carousel from "../../components/carousel/Carousel";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Your Menu</h1>
      <div className="menuMain">
        <div className="menuCode"></div>
        <div className="mainMenuContainer">
          <div className="menuMenu">
            <div className="menuHero">
              <div className="menuHeader">
                <div className="menuLogo">
                  <img
                    src="assets/logoMenu.jpeg"
                    alt="logo"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="menuTitle">Food Hub</div>
                <div className="menuDesc">Coming Soon</div>
                <div className="menuLoc">
                  <i className="fa fa-map-marker"></i>
                  <h4>Location</h4>
                </div>
              </div>
              <div className="menuContent">
                <Carousel show={3}>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div style={{ padding: 8 }} className="category-card">
                      <div>
                        <img
                          src="https://via.placeholder.com/200x300"
                          alt="placeholder"
                          style={{ width: "100%" }}
                        />
                      </div>

                      <h3 style={{ fontSize: "1rem", fontWeight: "lighter" }}>
                        BreakFast
                      </h3>
                    </div>
                  </div>
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
    </div>
  );
};

export default Menu;
