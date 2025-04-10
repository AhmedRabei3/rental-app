import { useEffect, useState } from "react";
import components from "../../components";
import "./HomePage.css";
import CategoriesCarousel from "../../components/categories/CategoriesCarousel";
import { useDispatch, useSelector } from "react-redux";
import { getAllItems } from "../../redux/apiCalls/itemApiCall";

const HomePage = () => {
  const { items } = useSelector((state) => state.items);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  //getAll Items from server
  useEffect(() => {
    setLoading(true);
    dispatch(getAllItems());
    setLoading(false);
  }, []);

  return (
    <div className="home-container">
      <components.Header />
      <components.SearchBox />
      <CategoriesCarousel />
      <div className="home-body">
        <components.ItemCard items={items} />
      </div>
      <components.Footer />
    </div>
  );
};

export default HomePage;
