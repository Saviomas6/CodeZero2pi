import React from "react";

const Block = (props) => {
  return (
    <div>
      <div>
        <div>
          <img className="image" src={props.img} alt=""></img>
          <h3>{props.heading}</h3>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
