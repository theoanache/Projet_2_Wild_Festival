import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import YouTubePlayer from "react-player/youtube";

const DivCard = ({ username, image, music, description }) => {
  return (
    <div className="card">
      <h3>{username}</h3>
      <img src={image} alt="" />
      <p>{description}</p>
      <YouTubePlayer
        className="ReactPlayer"
        url={music}
        width="100%"
        height="23vmin"
        controls="true"
        loading="lazy"
      />
      <Link to={`${username}`}>En savoir plus</Link>
    </div>
  );
};

DivCard.propTypes = {
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DivCard;
