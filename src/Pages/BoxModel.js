import React from "react";
import "../Styles/BoxModel.css"; // CSS file

function BoxModel() {
  return (
    <div className="box-model-container">
      <h2>CSS Box Model</h2>
      <div className="box">
        <div className="content">Content</div>
      </div>
      <p>In CSS, every element is a box with Margin, Border, Padding, and Content.</p>
    </div>
  );
}

export default BoxModel;
