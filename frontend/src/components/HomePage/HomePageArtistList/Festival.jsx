import React from "react";
import PropTypes from "prop-types";

const Festival = ({ image, name }) => {
  return (
    <div className="containerArtist">
      <img className="artist" src={image} alt={name} />
      <h4 className="artistText"> {name} </h4>
    </div>
  );
};

Festival.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Festival;
