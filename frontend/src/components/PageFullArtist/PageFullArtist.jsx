import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import Gender from "./Gender";
import TopPage from "./TopPage";
import LoadingBetweenPage from "../HomePage/Loading/LoadingBetweenPage";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBar from "../Navbar/Navbar";

const PageFullArtist = ({ userName, userAvatar }) => {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  const [loadingBetweenPage, setLoadingBetweenPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingBetweenPage(false);
    }, 3000);
  }, []);

  return (
    <div>
      {displayBurgerMenu ? (
        <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
      ) : (
        ""
      )}
      {loadingBetweenPage ? (
        <LoadingBetweenPage />
      ) : (
        <div>
          <NavBar
            openBurgerMenu={openBurgerMenu}
            userName={userName}
            userAvatar={userAvatar}
          />
          <div>
            <TopPage />
            <Gender />
          </div>
        </div>
      )}
    </div>
  );
};

PageFullArtist.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default PageFullArtist;
