import React from "react";

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(
        <span key={i} style={{ color: "gold" }}>
          &#9733;
        </span>
      );
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
// // Example usage
// const MyComponent = () => {
//   const ratingValue = 3; // Your rating value here

//   return <StarRating value={ratingValue} />;
// };
