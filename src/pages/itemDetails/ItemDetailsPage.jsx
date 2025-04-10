import ItemLocationmap from "../../components/itemDetail/ItemLocationMap";
import components from "../../components/index";
import { useLocation } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetailsPage() {
  const uselocation = useLocation();
  const item = uselocation.state.item;
  console.log(item.location);
  return (
    <div className="Item-details-container">
      <components.TopHeader />
      <div className="top-item-details">
        <div className="carousel-container">
          <components.ItemImageCarousel images={item.images} />
        </div>
        <div className="map-container">
          <ItemLocationmap location={item?.location} />
        </div>
      </div>
      <div className="item-details-body">
        <div className="booking"></div>
        <div className="item-data">data</div>
        <div className="item-reviews">reviews</div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
