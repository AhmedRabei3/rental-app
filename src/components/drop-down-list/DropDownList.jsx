import React, { useState } from "react";
import "./DropDown.css";

function DropDownList({ title, items, icon, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`bi ${icon}`}></i>
      </button>
      <ul className={`dropdown ${isOpen ? "show" : ""}`}>
        {items.map((item, index) => (
          <li key={index} onClick={() => onItemClick && onItemClick(index)}>
            <a
              onClick={() => setIsOpen(!isOpen)}
              href="#"
              className="dropdown-link"
            >
              {item.icon && <i className={`bi ${item.icon}`}></i>}
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
