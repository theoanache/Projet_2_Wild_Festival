import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { useParams } from "react-router-dom";
import FestivalProfil from "./Festival-profil";
import ListArtist from "./List-artist";
import "./Festival-page.css";
import festivalborder from "./assets/page-festival2.png";
import NavBar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LoadingBetweenPage from "../HomePage/Loading/LoadingBetweenPage";

const FestivalPage = ({ userName, userAvatar, setSelectedFestival }) => {
  const [getFestival, setGetFestival] = useState([]);
  const [getArtist, setGetArtist] = useState([]);
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);
  const [loadingBetweenPage, setLoadingBetweenPage] = useState(true);

  const { id } = useParams();

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  useEffect(() => {
    const url = `https://wild-festival.herokuapp.com/api/festivals/${id}`;
    axios.get(url).then((response) => {
      setGetFestival(response.data[0]);
    });
  }, [id]);

  useEffect(() => {
    const url = `https://wild-festival.herokuapp.com/api/festivals/${getFestival.idfestival}/artists`;
    axios.get(url).then((response) => {
      setGetArtist(response.data);
    });
  }, [getFestival.idfestival]);

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
          <div className="festival-page">
            <img
              className="border-festival"
              src={festivalborder}
              alt="Logo Page festival"
            />

            <FestivalProfil
              festival={getFestival}
              setSelectedFestival={setSelectedFestival}
            />

            <ListArtist artist={getArtist} />
          </div>
        </div>
      )}
    </div>
  );
};

FestivalPage.propTypes = {
  setSelectedFestival: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default FestivalPage;
