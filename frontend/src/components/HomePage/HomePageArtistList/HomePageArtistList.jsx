import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePageArtistList.css";
import { PropTypes } from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import CarouselMobile from "../../../pages/Homepage/CarouselMobile";
import Carousels from "../../../pages/Homepage/Carousel";
import Artiste from "./Artiste";
import Festival from "./Festival";
import Background from "../assets/picto wild-event.png";
import SearchBar from "../../../pages/Homepage/SearchBar";
import "../../../pages/Homepage/SearchBar.css";
import NavBar from "../../Navbar/Navbar";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import LoadingBetweenPage from "../Loading/LoadingBetweenPage";

const ArtistList = ({ userName, userAvatar }) => {
  const [artiste, setArtiste] = useState([]);
  const [festival, setFestival] = useState([]);
  const [artist, setArtist] = useState([]);
  const [festivals, setFestivals] = useState([]);
  const [slideD, setSlides] = useState([]);
  const [slideImages, setSlideImage] = useState([]);

  const [loadingBetweenPage, setLoadingBetweenPage] = useState(true);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const getSearchFestivals = () => {
    const artistList = "http://wild-festival.herokuapp.com/api/festivals";
    axios.get(artistList).then((response) => {
      setFestivals(response.data);
      setSlides(response.data.filter((e, i) => i < 8).map((e) => e.image1));
    });
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const getSearchArtists = () => {
    const artistList = "http://wild-festival.herokuapp.com/api/artists";
    axios.get(artistList).then((response) => {
      setArtist(response.data);
    });
  };

  const getArtiste = () => {
    const url = "https://wild-festival.herokuapp.com/api/artists?limit=10";
    axios.get(url).then((response) => {
      setArtiste(response.data);
    });
  };

  const getFestival = () => {
    const url = "https://wild-festival.herokuapp.com/api/festivals?limit=10";
    axios.get(url).then((response) => {
      setFestival(response.data);
    });
  };

  useEffect(() => {
    getArtiste();
    getFestival();
    getSearchArtists();
    getSearchFestivals();
  }, []);

  const [displayBurgerMenu, setDisplayBurgerMenu] = useState(false);

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

  useEffect(() => {
    if (slideD.length > 0) {
      setSlideImage(slideD.map((e, i) => <img src={e} alt={i + 1} />));
    }
  }, [slideD]);

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
          <AnimatePresence>
            <motion.div
              className="HomePageBackground"
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                className="HomePageLogo"
                src={Background}
                alt="background-violet"
                initial={{ y: 0, opacity: 0, scale: 0.3, rotate: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotate: -360 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.div>
          </AnimatePresence>
          <div className="searchContainer">
            {" "}
            <SearchBar artist={artist} festival={festivals} />
          </div>
          {windowSize.innerWidth > 600 ? (
            <div className="carouselContainers">
              {<Carousels slides={slideImages} autoplay interval={4000} /> || (
                <Skeleton />
              )}
            </div>
          ) : (
            <CarouselMobile slides={slideD} />
          )}

          <div className="globalComponent">
            <div>
              <h2 className="artistTextP">Artistes du moment</h2>
              <div className="scrollingArtist">
                {artiste.map((element) => (
                  <Link to={`/artiste/${element.name.toLowerCase()}`}>
                    <Artiste
                      key={element.idartist}
                      image={element.image_url}
                      name={element.name.toUpperCase()}
                      id={element.idartist}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <br />
            <br />
            <div>
              <h2 className="artistTextP">Festivals du moment</h2>
              <div className="scrollingArtist">
                {festival.map((element) => (
                  <Link to={`/festival/${element.idfestival}`}>
                    <Festival
                      key={element.idfestival}
                      idFestival={element.idfestival}
                      image={element.image1}
                      name={element.name.toUpperCase()}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};

ArtistList.propTypes = {
  userName: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
};

export default ArtistList;
