import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import Inforesa from "./Inforesa";
import Form from "./Form";
import logoaccueil from "./assets/unknown.png";
import NavBar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LoadingBetweenPage from "../HomePage/Loading/LoadingBetweenPage";
import "./Pageresa.css";

const Pageresa = ({ userName, userAvatar, selectedFestival }) => {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);
  const [loadingBetweenPage, setLoadingBetweenPage] = useState(true);

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingBetweenPage(false);
    }, 2000);
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
          <div className="pageResa">
            <AnimatePresence>
              <motion.div
                className="accueil"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  className="logoAccueil"
                  src={logoaccueil}
                  alt="logoaccueuil"
                  initial={{
                    y: 0,
                    opacity: 0,
                    scale: 0.3,
                    rotate: 0,
                  }}
                  animate={{ y: 0, opacity: 1, scale: 1, rotate: -360 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>
            <Inforesa selectedFestival={selectedFestival} />
            <Form />
          </div>
        </div>
      )}
    </div>
  );
};

Pageresa.propTypes = {
  selectedFestival: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default Pageresa;
