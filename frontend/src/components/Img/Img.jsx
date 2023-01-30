import React from "react";
import "./Img.css";
import PropTypes from "prop-types";

const Img = (props) => {
  const { className, src, alt } = props;

  return <img className={`logo-img ${className}`} src={src} alt={alt} />;
};

Img.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
