import React, { useState, useEffect } from "react";
import { toggleLike } from "../../redux/apiCalls/itemApiCall";
import { useNavigate } from "react-router-dom";
import "./ItemCard.css";

function ItemCard({ items, user }) {
  return (
    <div className="item-card-grid">
      {items.map((item) => (
        <CarouselCard key={item?._id} item={item} user={user} />
      ))}
    </div>
  );
}

function CarouselCard({ item, user }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [likes, setLikes] = useState(item.likes || []);
  const [isLiked, setLiked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (item.likes.includes(user?._id)) {
      setLiked(true);
    }
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === item.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [item.images.length, isLiked, user?._id]);

  const handleLike = async () => {
    try {
      toggleLike(item?._id);
      setLikes((prev) =>
        isLiked ? prev.filter((id) => id !== user?._id) : [...prev, user?._id]
      );
    } catch (err) {
      console.error("wrong", err);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi ${i < rating ? "bi-star-fill" : "bi-star"} star`}
      ></i>
    ));
  };

  return (
    <div className="card">
      <div className="image-wrapper">
        <img src={item.images[currentImage]?.url} alt="" className="image" />
        <div className="like-icon" onClick={handleLike}>
          <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`}></i>
          <span>{likes.length}</span>
        </div>
      </div>

      <div className="content">
        <div className="top-card-info">
          <div className="title">{item.name}</div>
          <div className="rating">{renderStars(item.averageRating)}</div>
        </div>

        <div className="price">
          ${item.price} per{" "}
          {item.rentalType === "daily"
            ? "day"
            : item.rentalType === "monthly"
            ? "month"
            : item.rentalType === "hourly"
            ? "hour"
            : item.rentalType === "weekly"
            ? "week"
            : item.rentalType === "yearly"
            ? "year"
            : item.rentalType === "half-year"
            ? "6 month"
            : "According to the agreement"}
        </div>
        <button
          onClick={() => {
            navigate("/item-details", { state: { item } });
          }}
          className="details-btn"
        >
          التفاصيل
        </button>
      </div>
    </div>
  );
}

export {ItemCard, CarouselCard};
