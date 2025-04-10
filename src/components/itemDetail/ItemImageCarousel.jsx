import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ItemImageCarousel.css";

const ItemImageCarousel = ({ images }) => {
  return (
    <div className="item-carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={3000}
        transitionTime={800}
      >
        {images.map((img, index) => (
          <div className="carousel-img-container" key={index}>
            <img src={img.url} alt={`Item ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ItemImageCarousel;
