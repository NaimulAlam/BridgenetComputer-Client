import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="jumbotron">
      <h1 style={{ color: "red" }}>Sorry! 404 Not Found</h1>
      <p>
        <Link to="/">
          <button className="btn btn-primary">Return Home</button>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
