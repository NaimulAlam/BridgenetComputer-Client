import React, { useEffect, useState } from "react";
import TestimonialDetails from "../TestimonialDetails/TestimonialDetails";

const testimonialData = [
  { name: "Mr. Alam", title: "Ceo of XYZ", image: "pc", key: 101, comment: "A well-known quote, contained in a blockquote element." },
  { name: "Mr. Naim", title: "Manager of YZX", image: "macbook", key: 102, comment: "A well-known quote, contained in a blockquote element." },
  { name: "Mr. Leo", title: "Freelancer", image: "smartphone", key: 103, comment: "A well-known quote, contained in a blockquote element." },
  { name: "Mr. Leo", title: "Freelancer", image: "smartphone", key: 103, comment: "A well-known quote, contained in a blockquote element." },
  { name: "Ms. Nisa", title: "IT Support Specialist", image: "tab", key: 104, comment: "A well-known quote, contained in a blockquote element. a little longer comments" },
];

const Testimonial = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  
  return (
    <div className="container-fluid my-5 " id="testimonial">
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
                key={details.key}
              ></TestimonialDetails>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
