import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, formDataSet] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) =>
    formDataSet({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("sucess");
  };
  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="password"
            minLength="6"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary" />
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
