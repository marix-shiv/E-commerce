import React, { useState } from "react";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confirmPassword: "",
    username: "",
    image: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const { name, email, phoneno, password, confirmPassword, username, image } =
    user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && email && phoneno && password && username && image) {
        const response = await fetch("http://localhost:8080/users", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(user),
        });
      } else {
        console.log("Error while submitting");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center m-4">Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email address
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Phone number" className="col-sm-2 col-form-label">
            Phone number
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phoneno"
              placeholder="Enter your Phone number"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter your password again"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Enter your image link"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
