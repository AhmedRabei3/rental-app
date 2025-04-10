import React, { useRef, useState, useEffect } from "react";
import "./CategoriesCarousel.css"; // ملف CSS منفصل
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategoriesCarousel = ({ filterItemsByCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // التحقق مما إذا كان هناك حاجة للأسهم
    const checkOverflow = () => {
      if (containerRef.current) {
        setShowArrows(
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category._id);
    filterItemsByCategory(category);
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const categories = [
    { _id: 1, categoryName: "Themes", icon: "🏰" },
    { _id: 2, categoryName: "Icons", icon: "⭐" },
    { _id: 3, categoryName: "Beachfront", icon: "🌊" },
    { _id: 4, categoryName: "Castles", icon: "🏰" },
    { _id: 5, categoryName: "Surfing", icon: "🏄" },
    { _id: 6, categoryName: "Islands", icon: "🏝️" },
    { _id: 7, categoryName: "Amazing views", icon: "🖼️" },
    { _id: 8, categoryName: "Amazing pools", icon: "🏊" },
    { _id: 9, categoryName: "Tiny homes", icon: "🏡" },
    { _id: 10, categoryName: "Lake", icon: "🌅" },
    { _id: 11, categoryName: "Rooms", icon: "🛏️" }, // إضافة كتير
    { _id: 12, categoryName: "Cabins", icon: "🏕️" },
  ];

  return (
    <div className="categories-wrapper">
      {showArrows && (
        <button className="arrow left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
      )}
      <div className="categories-container" ref={containerRef}>
        {categories.map((category) => (
          <div
            key={category._id}
            className={`category-item ${
              selectedCategory === category._id ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.categoryName}</span>
          </div>
        ))}
      </div>
      {showArrows && (
        <button className="arrow right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default CategoriesCarousel;
