import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const tabs = [
  { name: "الرئيسية", icon: "bi bi-house" },
  { name: "الإيجار", icon: "bi bi-buildings" },
  { name: "الدعم", icon: "bi bi-headset" },
  { name: "اللغة", icon: "bi bi-globe2" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef([]);
  const underlineRef = useRef(null);
  const navigate = useNavigate();
  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      navigate("/");
    } else if (index === 1) {
      navigate("/rentals");
    } else if (index === 2) {
      navigate("/support");
    } else if (index === 3) {
      navigate("/language");
    }
  };

  useEffect(() => {
    const currentTab = tabsRef.current[activeIndex];
    if (currentTab && underlineRef.current) {
      underlineRef.current.style.left = currentTab.offsetLeft + "px";
      underlineRef.current.style.width = currentTab.offsetWidth + "px";
    }
  }, [activeIndex]);

  return (
    <div className="navbar-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              handleTabClick(index);
            }}
          >
            {tab.name}
            <i className={tab.icon}></i>
          </div>
        ))}
        <div className="underline" ref={underlineRef}></div>
      </div>
    </div>
  );
};

export default Navbar;
