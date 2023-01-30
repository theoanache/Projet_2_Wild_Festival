import { AnimatePresence, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import React, { useState } from "react";
import logoContact from "./assets/unknown.png";
import Contact from "./Contact";
import "./contact.css";
import NavBar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const PageContact = ({ userName, userAvatar }) => {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  return (
    <div>
      {" "}
      {displayBurgerMenu ? (
        <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
      ) : (
        ""
      )}
      <NavBar
        openBurgerMenu={openBurgerMenu}
        userName={userName}
        userAvatar={userAvatar}
      />
      <div>
        <AnimatePresence>
          <motion.div
            className="pageContact"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              className="logoContact"
              src={logoContact}
              alt="logoaccueuil"
              initial={{ y: 0, opacity: 0, scale: 0.3, rotate: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1, rotate: -360 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

PageContact.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default PageContact;
