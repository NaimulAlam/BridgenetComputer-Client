import React, { useEffect, useState } from "react";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section
      className="container-fluid my-5 "
      id="testimonial"
      style={{ minHeight: "100vh" }}
    >
      <div className="row">
        <div className="col-12 my-5">
          <h4 className="text-danger mb-4">REAL TESTIMONIALS</h4>
          <h2 className="text-primary">What They Say About Our Company?</h2>
        </div>
        <div className="col-12 my-5">
          <div className="row row-cols-1 row-cols-md-3">
            {reviews.map((details) => (
              <TestimonialDetails
                details={details}
                key={details._id}
              ></TestimonialDetails>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
