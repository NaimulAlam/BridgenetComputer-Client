import firebase from "firebase/app";
import "firebase/auth";
import Swal from "sweetalert2";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

export const initializeLogin = () => {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      if (result.user.displayName) {
        Swal.fire(
          "success!", 
          "You have successfully logged In", 
          "success"
          );
          
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          success: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        return signedInUser;
      }
    })
    .catch((error) => {
      Swal.fire(
        "Error!",
        "something went wrong, please try again later",
        "error"
      );
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        success: false,
        name: "",
        email: "",
        error: res.error,
        photo: "",
      };
      return signedOutUser;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.massage);
    });
};
