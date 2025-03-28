import "./styles.css";

import React from "react";

function Slider() {
  const items = [
    { id: `1`, name: "item1", picture: "http:fake-image.com" },
    { id: `2`, name: "item2", picture: "http:fake-image2.com" },
  ];
  return (
    <div className="slider-container">
      <button className="bi bi-cheveron-left arrow-left"></button>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.picture} />
          <p>{item.name}</p>
        </div>
      ))}
      <button className="bi bi-cheveron-right arrow-left"></button>
    </div>
  );
}

export default Slider;
