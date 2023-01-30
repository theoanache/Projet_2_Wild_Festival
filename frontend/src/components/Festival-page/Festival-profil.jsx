import React from "react";
import "./Festival-profil.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import youtubelogo from "./assets/youtube_logo.png";

const FestivalProfil = ({ festival, setSelectedFestival }) => {
  return (
    <div>
      <div className="festival-profil">
        <div className="festival-description">
          <h1 className="festival-title">{festival.name}</h1>
          <p>
            Du {festival.startDate} au {festival.endDate}
          </p>
          <p>
            à {festival.city}, {festival.country}
          </p>
          <span />
          <a href={festival.url_video} target="_blank" rel="noreferrer">
            <img
              className="youtube_logo"
              src={youtubelogo}
              alt="Logo YouTube"
            />
          </a>
        </div>
        <div className="festival-image">
          <img
            className="festival-image"
            src={festival.logo}
            alt={festival.name}
          />
        </div>
      </div>
      <div className="button-container">
        <Link to="/reservation">
          <button
            type="button"
            className="buy-button"
            onClick={() => setSelectedFestival(festival)}
          >
            JE RÉSERVE MA PLACE
          </button>
        </Link>
      </div>
    </div>
  );
};

FestivalProfil.propTypes = {
  festival: PropTypes.string.isRequired,
  setSelectedFestival: PropTypes.string.isRequired,
};

export default FestivalProfil;
