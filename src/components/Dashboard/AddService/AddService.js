import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const [imgUrl, setImgUrl] = useState({});

  const onSubmit = (data) => {
    const serviceData = {
      servicename: data.servicename,
      description: data.description,
      price: data.price,
      imgUrl: imgUrl,
    };

    const url = `https://intense-fortress-10437.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Your Product Added Successfully");
        }
      });
  };

  const handleImageUpload = (event) => {
    const imgData = new FormData();
    imgData.set("key", "b7d1f7ea94e0d0890ce2429fdf90f279");
    imgData.append("image", event.target.files[0]);

    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imgData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImgUrl(data.data.display_url);
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2">
            <AdminSidebar></AdminSidebar>
          </div>
          <div className="col-sm-12 col-md-10" style={{ minHeight: "100vh" }}>
            <div className="col">
              <h3 className="text-primary p-4">Add Services </h3>
            </div>
            <div className="col">
              <form className="m-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">Service Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      servicename="servicename"
                      placeholder="Laptop Repair"
                      {...register("servicename", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      name="description"
                      placeholder="Laptop full cleaning"
                      {...register("description", {
                        required: true,
                        maxLength: 250,
                      })}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      name="price"
                      placeholder="12"
                      {...register("price", { required: true, maxLength: 4 })}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">Upload image here</label>
                    <input
                      className="form-control bg-light"
                      required
                      name="imgUrl"
                      type="file"
                      onChange={handleImageUpload}
                      {...register}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                </div>
                <div className="form-row justify-content-md-center">
                  <div className="col  mb-3">
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
