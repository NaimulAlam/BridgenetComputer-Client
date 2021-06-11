import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";
import googleIcon from "../../../images/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import Swal from "sweetalert2";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const authToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        if (result.user.displayName) {
          Swal.fire("success!", "You have successfully logged In", "success");

          const { displayName, email, photoURL } = result.user;
          const signedInUser = {
            ...loggedInUser,
            name: displayName,
            email: email,
            photo: photoURL,
          };
          setLoggedInUser(signedInUser);
          history.replace(from);
          authToken();
        }
      })
      .catch((error) => {
        Swal.fire(
          "Error!",
          "something went wrong, please try again later",
          "error"
        );
        const errorMessage = error.message;
        console.log("err", errorMessage);
      });
  };

  const handleClick = () => {
    (async () => {
      const { value: accept } = await Swal.fire({
        title: "Terms and conditions",
        input: "checkbox",
        inputValue: 1,
        inputPlaceholder: "I agree with the terms and conditions",
        confirmButtonText:
          'Continue&nbsp;<i  className="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          return !result && "You need to agree with T&C";
        },
      });
      if (accept) {
        handleGoogleSignIn();
      }
    })();
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
          {loggedInUser.email && (
            <div className="card-header">
              <h5>Current User Information</h5>
              <p>Name: {loggedInUser.name} </p>
              <p>Email: {loggedInUser.email} </p>
            </div>
          )}
          <button
            onClick={handleClick}
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
