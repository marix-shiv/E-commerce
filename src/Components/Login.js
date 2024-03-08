import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRedux } from "../Redux/userSlice";

const Login = () => {
  //const [fname, setFname] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const dataFetch = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const dataRes = await dataFetch.json();
      if (dataRes.message === "Invalid credentials") {
        alert(dataRes.message);
      } else {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      }
    } else {
      alert("Please Enter Username & Password");
    }
  };

  return (
    <div className="maincontainer mt-5 d-flex justify-content-center align-items-center">
      <div className="col-md-5 bg-light shadow-lg p-3 mb-5 bg-body rounded">
        <div className="login d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 mx-auto">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <FaUserTie className="display-1" />
                </div>
                {/* <h6 className="display-6">Hey there...</h6> */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      placeholder="Email address"
                      className="form-control rounded-pill border-0 shadow-sm px-4"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-check mb-3 ">
                    <input
                      id="customCheck1"
                      type="checkbox"
                      // checked
                      className="form-check-input mr-3 ml-3"
                    />
                    <label htmlFor="customCheck1" className="form-check-label">
                      Remember password
                    </label>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
