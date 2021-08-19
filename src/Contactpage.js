import React from "react";
import CardImg from "./images/cardimage.png";
const Contactpage = () => {
  return (
    <div>
      <div className="contactmain">
        <div className="contactcard">
          <div className="card">
            <img src={CardImg} alt=""></img>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <button className="button">Download a sample</button>
          </div>
        </div>
        <div className="contactdata">
          <h2>The most useful resource</h2>
          <h2>ever created for dev|</h2>
          <p>
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>
          <div>
            <span>Lifetime update &nbsp;&nbsp;</span>
            <span>Tech support &nbsp;&nbsp;</span>
          </div>
          <div>
            <span>Tons of assets &nbsp;&nbsp;</span>
            <span>Integration ready&nbsp;&nbsp;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
