import React from "react";
import "./Artist.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Artist = ({ name, image }) => {
  return (
    <button type="button" className="complete-artist">
      <div className="line-up">
        <h4 className="artist-name">{name}</h4>
      </div>
      <img className="artist-image-fest" src={image} alt={name} />
      <Link className="artist-link" to={`/artiste/${name.toLowerCase()}`}>
        En savoir plus
      </Link>
    </button>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;
