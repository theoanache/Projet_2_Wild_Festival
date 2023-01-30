import { PropTypes } from "prop-types";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import bmhaut from "../../assets/bmhaut.png";
import pictowild from "../../assets/pictowild.png";
import logoWildFestival from "../../assets/logo-wild-festival.png";
import Img from "../Img/Img";
import "./BurgerMenu.css";
import burgerMenuData from "./utils/BurgerMenudata";
import ItemsBurgerMenu from "./ItemsBurgerMenu";

const BurgerMenu = (props) => {
  const { closeBurgerMenu } = props;

  return (
    <div className="burger-menu-toggle">
      <div className="burger-background" />
      <div className="burger-left-side">
        <img className="logo-violet" src={bmhaut} alt="logo-bm" />
        <img className="logo" src={logoWildFestival} alt="logo" />
        <ul className="menu">
          {burgerMenuData.itemBurgerMenuList.map((item) => (
            <ItemsBurgerMenu
              menu={item.menu}
              lien={item.lien}
              closeBurgerMenu={closeBurgerMenu}
            />
          ))}
        </ul>
        <div className="infos">
          {burgerMenuData.logosList.map((logo) => (
            <Img className={logo.className} src={logo.src} alt={logo.alt} />
          ))}
          <div className="burger-footer">
            <Link to="/Faq">FAQ</Link>
            <img src={pictowild} alt="logoevent" className="logo-event" />
          </div>
        </div>
      </div>
      <div className="burger-right-side">
        <span>
          <MdClose className="close-burger-menu" onClick={closeBurgerMenu} />
        </span>
      </div>
    </div>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  closeBurgerMenu: PropTypes.func.isRequired,
};
