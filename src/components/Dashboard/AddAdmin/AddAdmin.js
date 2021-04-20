import React from "react";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AddAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 col-sm-12 mt-3 pt-3 d-flex justify-content-center">
          <div className="container-fluid" style={{ minHeight: "100vh" }}>
            <h3 className="text-primary p-3">Add Admin</h3>
            <h4>Add Admin Here</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
