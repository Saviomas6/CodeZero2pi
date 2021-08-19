import React from "react";
import Images from "./images/dashboard.png";
const Page4 = () => {
  return (
    <div>
      <div className="maindiv_page4">
        <div className="child_div1">
          <h2>We have lots of experience</h2>
          <span style={{ color: "#6D5EEA" }}> building Bootstrap themes.</span>
          <p>
            We've built well over a dozen Bootstrap themes and sold tens of
            thousands of copies.
          </p>
          <div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png"
                alt=""
                height="64px"
                width="64px"
              ></img>
              <h4>Bootstrap users since the beginning</h4>
              <p>
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </p>
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png"
                alt=""
                height="64px"
                width="64px"
              ></img>
              <h4>Bootstrap users since the beginning</h4>
              <p>
                We've been developing with Bootstrap since it was publicly
                released in 2011.
              </p>
            </div>
          </div>
        </div>
        <div className="child_div2">
          <img src={Images} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Page4;
