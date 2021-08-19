import React from "react";
import Img1 from "./images/insta.png";
import Img2 from "./images/facebook.png";
import Img3 from "./images/tweet.png";
import Img4 from "./images/pin.png";
const Footer = () => {
  const url = "";
  return (
    <div>
      <div className="main_footer">
        <div className="subdiv_footer1">
          <a href={url} className="navbar__title navbar__item">
            Landkit.
          </a>
          <p>A better way to build.</p>
          <div className="sociallogo">
            <img src={Img1} alt="" width="32px" height="32px"></img>
            <img src={Img2} alt="" width="32px" height="32px"></img>
            <img src={Img3} alt="" width="32px" height="32px"></img>
            <img src={Img4} alt="" width="32px" height="32px"></img>
          </div>
        </div>
        <br />
        <div className="subdiv_footer2">
          <div className="subchild_footer1">
            <div>
              <h6>PRODUCTS</h6>
              <ul>
                <li>
                  <a href={url}>Page Builder</a>
                </li>
                <li>
                  <a href={url}>UI Kit</a>
                </li>
                <li>
                  <a href={url}>Styleguide</a>
                </li>
                <li>
                  <a href={url}>Documentation</a>
                </li>
                <li>
                  <a href={url}>Changelog</a>
                </li>
              </ul>
            </div>
            <div className="style_list">
              <h6>CONNECT</h6>
              <ul>
                <li>
                  <a href={url}>Page Builder</a>
                </li>
                <li>
                  <a href={url}>UI Kit</a>
                </li>
                <li>
                  <a href={url}>Styleguide</a>
                </li>
                <li>
                  <a href={url}>Documentation</a>
                </li>
                <li>
                  <a href={url}>Changelog</a>
                </li>
                <li>
                  <a href={url}>Documentation</a>
                </li>
                <li>
                  <a href={url}>Changelog</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="subchild_footer2">
            <div>
              <h6>SERVICES</h6>
              <ul>
                <li>
                  <a href={url}>Documentation</a>
                </li>
                <li>
                  <a href={url}>Changelog</a>
                </li>
                <li>
                  <a href={url}>Page Builder</a>
                </li>
                <li>
                  <a href={url}>UI Kit</a>
                </li>
              </ul>
            </div>
            <div className="style_list">
              <h6>LEGAL</h6>
              <ul>
                <li>
                  <a href={url}>Documentation</a>
                </li>
                <li>
                  <a href={url}>Changelog</a>
                </li>
                <li>
                  <a href={url}>Page Builder</a>
                </li>
                <li>
                  <a href={url}>Page Builder</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
