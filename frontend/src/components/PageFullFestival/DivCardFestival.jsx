import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DivCardFestival = ({
  usernameFestival,
  logo,
  description,
  video,
  id,
}) => {
  return (
    <div className="card">
      <h3>{usernameFestival}</h3>
      <img src={logo} alt="" />
      <p>{description}</p>
      <ReactPlayer
        className="ReactPlayer"
        url={video}
        width="100%"
        height="23vmin"
        controls="true"
      />
      <Link to={`${id}`}>En savoir plus</Link>
    </div>
  );
};

DivCardFestival.propTypes = {
  usernameFestival: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DivCardFestival;
