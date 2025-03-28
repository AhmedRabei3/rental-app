import "../styles.css";

import React from "react";

function HeroHeader() {
  return (
    <div className="hero-header">
      <div className="title">كل ما تريد استئجاره في مكان واحد</div>
      <div className="search-box">
        <div className="search-bar">
          <div className="search-keys">
            <div className="search-key catygory">الفئة</div>
            <div className="search-key">المدة</div>
            <div className="search-key">السعر</div>
          </div>
          <input type="search" placeholder="إبحث ..." />
          <i className="bi bi-search"></i>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
