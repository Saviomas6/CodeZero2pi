import React from "react";
import Image from "./images/airbnblogo.png";
import Image1 from "./images/image5.png";
const Page5 = () => {
  return (
    <div className="main_div-page5">
      <h2>Our customers are our biggest fans.</h2>
      <p>
        We don't like to brag, but we don't mind letting our customers do it for
        us. Here are a few nice things folks have said about our themes over the
        years.
      </p>
      <div className="sub_div">
        <div className="sub_div1">
          <img src={Image1} alt=""></img>
        </div>
        <div className="sub_div2">
          <img src={Image} alt=""></img>
          <p>
            “Landkit is hands down the most useful front end Bootstrap theme
            I've ever used. I can't wait to use it again for my next project.”
          </p>
          <span>DAVE Gamache</span>
        </div>
      </div>
    </div>
  );
};

export default Page5;
