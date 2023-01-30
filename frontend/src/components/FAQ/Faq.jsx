import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { GoAlert } from "react-icons/go";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./Faq.css";
import FaqPage from "./FaqPage";
import NavBar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Faq = ({ userName, userAvatar }) => {
  const [showObjetsInterditsAutorises, setShowObjetsInterditsAutorises] =
    useState(true);
  const [showQuestionsFrequentes, setShowQuestionsFrequentes] = useState(false);

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
      <div className="faq">
        <h1>Foire aux questions</h1>
        <div className="faq-menu">
          <div
            className={`faq-menu-item cursor ${
              showObjetsInterditsAutorises ? "active" : ""
            }`}
            onClick={() => {
              setShowObjetsInterditsAutorises(true);
              setShowQuestionsFrequentes(false);
            }}
            onKeyDown={() => {
              setShowObjetsInterditsAutorises(true);
              setShowQuestionsFrequentes(false);
            }}
            role="presentation"
          >
            <GoAlert /> Objets interdits/autorisés
          </div>
          <div
            className={`faq-menu-item cursor ${
              showQuestionsFrequentes ? "active" : ""
            }`}
            onClick={() => {
              setShowObjetsInterditsAutorises(false);
              setShowQuestionsFrequentes(true);
            }}
            onKeyDown={() => {
              setShowObjetsInterditsAutorises(false);
              setShowQuestionsFrequentes(true);
            }}
            role="presentation"
          >
            <AiFillQuestionCircle /> Questions fréquentes
          </div>
        </div>
        <FaqPage
          showObjetsInterditsAutorises={showObjetsInterditsAutorises}
          showQuestionsFrequentes={showQuestionsFrequentes}
        />
      </div>
    </div>
  );
};

Faq.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default Faq;
