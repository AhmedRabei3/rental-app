import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaHeart, FaStar, FaRegHeart } from "react-icons/fa";
import "./styles.css";

const Carousel = ({ topRatedItems }) => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">📌 العناصر الأعلى تقييماً</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {topRatedItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-item">
              <div className="image-container">
                <img src={item.image} alt={item.name} />
                <div className="like-container">
                  {item.liked ? <FaHeart className="liked" /> : <FaRegHeart />}
                  <span>{item.likes}</span>
                </div>
              </div>
              <h3 className="item-name">{item.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "star filled" : "star"}
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
