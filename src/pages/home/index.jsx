import "./styles.css";
import Header from "../../components/header";
import Carousel from "../../components/carousel";

function HomePage() {
  const topRatedItems = [
    {
      id: 1,
      name: "كاميرا احترافية",

      image:
        "https://cdn.pixabay.com/photo/2016/03/10/16/13/camera-1248682_1280.jpg",
      likes: 120,
      rating: 5,
      liked: true,
    },
    {
      id: 2,
      name: "دراجة هوائية",
      image:
        "https://cdn.pixabay.com/photo/2019/08/13/20/51/bike-4404230_960_720.jpg",
      likes: 85,
      rating: 4,
      liked: false,
    },
    {
      id: 3,
      name: "خيمة تخييم",
      image:
        "https://cdn.pixabay.com/photo/2021/01/04/10/44/tent-5887142_640.jpg",
      likes: 45,
      rating: 3,
      liked: true,
    },
    {
      id: 4,
      name: "كرسي ألعاب",
      image:
        "https://media.istockphoto.com/id/1616658763/tr/foto%C4%9Fraf/room-with-computer-monitor-gaming-pc-video-camera-and-headphones-with-empty-chair.jpg?s=2048x2048&w=is&k=20&c=urZexpb7SAM9j3sIawziFUeOUFRviwsxxlAK9VXM7nA=",
      likes: 95,
      rating: 5,
      liked: false,
    },
    {
      id: 5,
      name: "Smart tv ",
      image: "https://cdn.pixabay.com/photo/2015/02/07/20/58/tv-627876_640.jpg",
      likes: 95,
      rating: 5,
      liked: false,
    },
  ];
  return (
    <div>
      <Header />
      <Carousel topRatedItems={topRatedItems} />
    </div>
  );
}
export default HomePage;
