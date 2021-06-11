import "./App.css";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivetRoute/PrivetRoute";
import Login from "./components/Login/Login/Login";
import Admin from "./components/Dashboard/Admin/Admin";
import { createContext, useState } from "react";
import AddService from "./components/Dashboard/AddService/AddService";
import Book from "./components/Dashboard/Book/Book";
import AllServices from "./components/Dashboard/AllServices/AllServices";
import AllBookings from "./components/Dashboard/AllBookings/AllBookings";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import Bookings from "./components/Dashboard/Bookings/Bookings";
import NotFound from "./components/Shared/NotFound/NotFound";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const token = sessionStorage.getItem("token");

  if (!loggedInUser?.email && token) {
    var decoded = jwt_decode(token);
    const info = { ...loggedInUser };
    info.name = decoded.name;
    info.email = decoded.email;
    info.photo = decoded.picture;
    if (decoded.email) {
      setLoggedInUser(info);
    }
  }

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Bookings />
            </PrivateRoute>
            <PrivateRoute path="/bookings">
              <Bookings />
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <AddAdmin />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/allServices">
              <AllServices />
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <AllBookings />
            </PrivateRoute>
            <PrivateRoute path="/serviceBooking/:id">
              <Book />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
