import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import Skeleton from "react-loading-skeleton";
import ArtistProfil from "./Artist-profil";
import ListDate from "./List-date";
import "./Artist-page.css";
import artistborder from "./assets/page-artiste2.png";
import LoadingBetweenPage from "../HomePage/Loading/LoadingBetweenPage";
import "react-loading-skeleton/dist/skeleton.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import NavBar from "../Navbar/Navbar";

const ArtistPage = ({ userName, userAvatar }) => {
  const [soloArtist, setSoloArtist] = useState([]);
  const [genreArtist, setGenreArtist] = useState([]);
  const [listFestival, setListFestival] = useState([]);
  const { artistName } = useParams();
  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);
  const [loadingBetweenPage, setLoadingBetweenPage] = useState(true);

  const openBurgerMenu = () => {
    setDisplayBurgerMenu(true);
  };

  const closeBurgerMenu = () => {
    setDisplayBurgerMenu(false);
  };

  useEffect(() => {
    const url = `https://wild-festival.herokuapp.com/api/artists/${artistName}`;
    axios.get(url).then((response) => {
      setSoloArtist(response.data[0]);
    });
  }, [artistName]);

  useEffect(() => {
    const url = `https://wild-festival.herokuapp.com/api/styles/${soloArtist.id_style}`;
    axios.get(url).then((response) => {
      setGenreArtist(response.data[0]);
    });
  }, [soloArtist.id_style]);

  useEffect(() => {
    const url = `https://wild-festival.herokuapp.com/api/artists/${soloArtist.idartist}/festival`;
    axios.get(url).then((response) => {
      setListFestival(response.data);
    });
  }, [soloArtist.idartist]);

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
          <div className="artist-page">
            <img
              className="border-artist"
              src={artistborder}
              alt="Logo Page artiste"
            />
            <ArtistProfil
              artistName={soloArtist}
              artistGenre={genreArtist.name}
            />
            {<ListDate festivalName={listFestival} /> || <Skeleton />}
          </div>
        </div>
      )}
    </div>
  );
};
ArtistPage.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default ArtistPage;
