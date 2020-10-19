import React from "react";
import "./Controls.scss";

const Controls = () => {
  return (
    <div className="control-wrapper">
      <div className="control">
        <div className="arrow bottom" />
      </div>
      <div className="control">
        <div className="arrow top" />
      </div>
    </div>
  );
};

export default Controls;
