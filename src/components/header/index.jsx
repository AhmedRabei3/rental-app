import HeroHeader from "./heroHeader";
import "./styles.css";
import TopHeader from "./topHeader";

const Header = () => {
  return (
    <header className="header">
      <TopHeader />
      <HeroHeader />
    </header>
  );
};

export default Header;
