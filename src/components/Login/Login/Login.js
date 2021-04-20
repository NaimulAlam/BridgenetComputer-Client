import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { initializeLogin, handleGoogleSignIn } from "./LoginManager.js";
import "./Login.css";
import googleIcon from "../../../images/google.png";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  initializeLogin();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <>
      <div className="container-fluid my-5">
        <div className="loginContainer">
          <div className="container-fluid my-5">
            <Link to="/" className="text-dark nav-link px-3">
              <h2>Bridgenet Computer</h2>
            </Link>
          </div>
          {loggedInUser.length && (
            <div className="card-header">
              {loggedInUser.name}
              <br />
              {user.email}
            </div>
          )}
          <button
            onClick={googleSignIn}
            className="btn btn-outline-primary my-4"
          >
            <img className="iconClass" src={googleIcon} alt="icon" />
            <span className="text-center">Google Sign In</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
