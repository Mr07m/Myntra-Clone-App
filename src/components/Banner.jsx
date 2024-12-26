import React from "react";

const Banner = ({ url }) => {
  return (
    <div className="container my-4 mx-auto">
      <div className="banner">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Banner;
