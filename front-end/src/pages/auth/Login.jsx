import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/Banners.jsx";
import "./login.css";
import { logInUser } from "../../service/auth/index.js";

function Login() {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleFromSubmition = async (e) => {
    e.preventDefault();
    const result = await logInUser(userCredentials);
    if (result?.error) {
      setError(result?.error);
    }
    console.log(result.success)
    if(result.success){
      navigate('/')
    }
  };
  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div>
      <Banner content={"Login"} />
      <div className="container">
        <form action="" onSubmit={handleFromSubmition}>
          <div className="form-input">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleOnChangeInput}
            />
            {error?.username && (
              <span className="error">{error?.username}</span>
            )}
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleOnChangeInput}
            />
            {error?.password && (
              <span className="error">{error?.password}</span>
            )}
          </div>
          <div className="form-input">
            <button> Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
