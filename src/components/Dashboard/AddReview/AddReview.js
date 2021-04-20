import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imgUrl, setImgUrl] = useState({});

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      title: data.title,
      review: data.description,
      imgUrl: imgUrl,
    };

    const url = `http://localhost:5000/addReview`;
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
          alert("Thank you! Your Review Added Successfully");
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
            <Sidebar></Sidebar>
          </div>
          <div className="col-sm-12 col-md-10">
            <div className="col">
            <h3 className="text-primary p-3">Add Review</h3>
            </div>
            <div className="col">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="col mb-3">
                    <label htmlFor="validationTooltip01">Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      name="description"
                      placeholder="You Did A great Job..."
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
                    <label htmlFor="validationTooltip01">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      name="name"
                      placeholder="Mr Hero"
                      {...register("name", { required: true, maxLength: 80 })}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">
                      Title or position
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationTooltip01"
                      required
                      name="title"
                      placeholder="CEO of XYZ"
                      {...register("title", { required: true, maxLength: 20 })}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip01">Your Picture</label>
                    <input
                      className="form-control"
                      required
                      name="imgUrl"
                      type="file"
                      onChange={handleImageUpload}
                      {...register}
                    />
                    <div className="valid-tooltip">Looks good!</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6 mb-3">
                    <button className="btn btn-primary" type="submit">Save</button>
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

export default AddReview;
