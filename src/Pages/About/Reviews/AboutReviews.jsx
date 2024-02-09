import React from "react";

import Review from "./Review";
import { reviewsArray } from "./ReviewsArray";
import { AboutReviewsStyled } from "./AboutReviewsStyles";

function AboutReviews() {
  return (
    <AboutReviewsStyled>
      <h2>Reseñas de Usuarios</h2>
      <hr />
      <div className="reviews-container">
        {reviewsArray.map((review) => {
          return (
            <Review
              key={review.id}
              stars={review.stars}
              name={review.name}
              description={review.description}
            />
          );
        })}
      </div>
    </AboutReviewsStyled>
  );
}

export default AboutReviews;
