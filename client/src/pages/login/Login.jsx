import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [type, setType] = useState("password");
  const [isShowen, setIshowen] = useState("fa fa-eye-slash password-icon");

  const handleToggle = () => {
    if (type === "password") {
      setIshowen("fa fa-eye password-icon");
      setType("text");
    } else {
      setIshowen("fa fa-eye-slash password-icon");
      setType("password");
    }
  };
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      // if (res.data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/menu");
      // } else {
      //   navigate("/");
      // dispatch({
      //   type: "LOGIN_FAILURE",
      //   payload: { message: "you are not allowed !" },
      // });
      // }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  // useEffect(() => {
  //   handleClick();
  // }, [credentials]);

  console.log(user);

  return (
    <div className="login">
      <div className="loginFrom-Container">
        <div className="left">
          <h2>Login</h2>
        </div>
        <div className="loginForm">
          {error && <span style={{ color: "red" }}>{error.message}</span>}
          <div className="loginLabel">
            <h3>Username</h3>
            <input
              type="text"
              placeholder="username"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
          </div>
          <div className="loginLabel">
            <h3>Password</h3>
            <input
              type={type}
              placeholder="password"
              id="password"
              onChange={handleChange}
              className="lPassword"
            />

            <i className={isShowen} onClick={handleToggle}></i>
          </div>

          <button
            disabled={loading}
            onClick={handleClick}
            className="lButton"
            style={{
              border: "none",
              fontSize: "30px",
              padding: "15px 20px",
              borderRadius: "20px",
              backgroundColor: "blue",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
