import React, { useState } from "react";
import { PropTypes } from "prop-types";
import NavBar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import mentionData from "./utils/mentionData";
import "./Mention.css";

const Mentions = ({ userName, userAvatar }) => {
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  return (
    <div>
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

      <div className="mentions">
        <h1>{mentionData.title}</h1>
        <div className="paragraphes">
          {mentionData.paragraphs.map((paragraph) => (
            <div className="paragraphes-item">
              {paragraph.lignes.map((ligne) => (
                <p>{ligne}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Mentions.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default Mentions;
