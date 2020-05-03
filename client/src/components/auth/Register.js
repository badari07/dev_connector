import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import setAlert from "../../actionCreaters/setAlert";
import PropTypes from "prop-types";

const Register = ({ setAlert }) => {
  const [formData, formDataSet] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleOnChange = (e) =>
    formDataSet({ ...formData, [e.target.name]: e.target.value });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password not match", "danger");
    } else {
      console.log("sucess");
    }
  };
  return (
    <>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={handleOnChange}
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image, use a
            Gravatar email
          </small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            minLength="6"
            name="password2"
            value={password2}
            onChange={handleOnChange}
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
        <p className="my-1">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   setAlert: (msg, alertType) => dispatch(setAlert(msg, alertType)),
// });

export default connect(null, { setAlert })(Register);
