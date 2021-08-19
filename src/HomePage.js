import React from "react";
import Images from "./images/images.png";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import BlockComponent from "./BlockComponent";
import Contactpage from "./Contactpage";
import Footer from "./Footer";

import LogoComponent from "./LogoComponent";
const HomePage = () => {
  return (
    <div>
      <div className="maindiv">
        <div className="contain">
          <h1>Welcome to Landkit.</h1>
          <h1>Develop anything.</h1>
          <p>Build a beautiful,modern website with flexible</p>
          <p>Bootstrap components built from scratch</p>
          <button className="button">View all pages</button>
          <button className="button">Documentation</button>
        </div>
        <div>
          <img src={Images} alt="homepageimage" className="images"></img>
        </div>
      </div>
      <BlockComponent />
      <LogoComponent />
      <Contactpage />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
};

export default HomePage;
