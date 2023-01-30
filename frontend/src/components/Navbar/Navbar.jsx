import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import logoWildFestival from "../../assets/Logo.png";
import panierLogo from "../../assets/panier.png";
import contactLogo from "../../assets/formulaire-de-contact (1).png";

const NavBar = ({ openBurgerMenu, userName, userAvatar }) => {
  return (
    <div className="navbar">
      <div className="left-side">
        <BiMenu className="burger-menu" onClick={openBurgerMenu} />
        <Link to="/home">
          <img className="logo" src={logoWildFestival} alt="logo" />
        </Link>
        <ul className="burger-display">
          <li>
            <Link to="/festival">Festivals</Link>
          </li>
          <li>
            <Link to="/artiste">Artistes</Link>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="item-content">
          <img className="avatar" src={userAvatar} alt="" />
          <p className="userName">{userName}</p>
        </div>
        <div className="item-content">
          <Link to="/reservation">
            <img src={panierLogo} alt="panier" />
            Réservation
          </Link>
        </div>
        <div className="item-content">
          <Link to="/contact">
            <img src={contactLogo} alt="panier" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  openBurgerMenu: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};
