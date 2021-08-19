import React from "react";
import Images from "./images/imagespage6.png";
const Page6 = () => {
  return (
    <div>
      <div className="main_divpag4">
        <div className="sub_divpage4">
          <h2>Stay focused on your business.</h2>
          <span style={{ color: "#6D5EEA" }}>Let us handle the design.</span>
          <p>
            You have a business to run. Stop worring about cross-browser bugs,
            designing new pages, keeping your components up to date. Let us do
            that for you.
          </p>
          <div className="submainpage4">
            <div className="submain_divpage4">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
            <div className="submain_divpage4">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
            <div className="submain_divpage4">
              <h3>100k+</h3>
              <p>Sales</p>
            </div>
          </div>
        </div>
        <div className="sub_divpage4">
          <img src={Images} alt="" height="300px" width="400px"></img>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Fair, simple pricing for all.</h1>
      <p style={{ textAlign: "center" }}>
        All types of businesses need access to development resources, so we give
        you the option to decide how much you need to use.
      </p>
    </div>
  );
};

export default Page6;
