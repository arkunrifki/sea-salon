import "./review.scss";
import { reviewInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Review = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="review section-padding">
      <div className="section-title" data-aos="fade-up">
        <h4>Reviews</h4>
      </div>
      <div className="review__container wrapper">
        {reviewInfo.map(({ name, post, img, des }) => (
          <div className="review__card" key={name} data-aos="fade-up">
            <div className="review__text">
              <p>{des}</p>
            </div>
            <div className="review__info">
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <p>{post}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
