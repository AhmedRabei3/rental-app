import "./SearchBox.css";
import React from "react";

function SearchBox() {
  return (
    <div className="search-container">
      <div className="select-item">
        <select className="select-box">
          <option value="1">Category</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </select>
      </div>
      <div className="select-item">
        <select className="select-box">
          <option value="1">Place</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </select>
      </div>
      <div className="select-item">
        <select className="select-box">
          <option value="1">Price</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </select>
      </div>
      <input type="text" className="search" placeholder="ماذا تريد؟ ..." />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default SearchBox;
