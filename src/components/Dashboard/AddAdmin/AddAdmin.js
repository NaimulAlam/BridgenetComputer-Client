import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AddAdmin = () => {
  const [loggedInUser] = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
      AdminIdentity: loggedInUser.name,
    };

    const url = `https://intense-fortress-10437.herokuapp.com/addAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("New Admin Added Successfully");
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 col-sm-12">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-md-10 col-sm-12 my-5 pb-5 col-md-10">
          <div className="container-fluid">
            <h3 className="text-primary">Add An Admin</h3>
          </div>
          <div className="container-fluid">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="col mb-3">
                  <label htmlFor="validationTooltip01">Admin Email</label>
                  <input
                    required
                    name="email"
                    id="validationTooltip01"
                    className="form-control"
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  <div className="valid-tooltip">Looks good!</div>
                </div>
              </div>
              <div className="form-row">
                <div className="col mb-3">
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
