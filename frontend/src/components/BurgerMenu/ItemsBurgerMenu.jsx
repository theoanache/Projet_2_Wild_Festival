import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const ItemsBurgerMenu = (props) => {
  const { menu, lien, closeBurgerMenu } = props;
  return (
    <li>
      <Link to={lien} onClick={closeBurgerMenu}>
        {menu}
      </Link>
    </li>
  );
};

export default ItemsBurgerMenu;

ItemsBurgerMenu.propTypes = {
  menu: PropTypes.string.isRequired,
  lien: PropTypes.string.isRequired,
  closeBurgerMenu: PropTypes.func.isRequired,
};
