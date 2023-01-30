import React from "react";
import "./Date.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Date = ({
  idfestival,
  name,
  startDate,
  endDate,
  city,
  country,
  image,
}) => {
  return (
    <div className="complete-date">
      <div className="place-festival">
        <h3 className="festival-name">{name}</h3>
        <h5 className="festival-place">
          {city}, {country}
        </h5>
        <p className="date">
          Du <strong>{startDate}</strong> <br /> au <strong>{endDate}</strong>
        </p>
      </div>
      <img className="festival-logo" src={image} alt={name} />
      <Link className="festival-link" to={`../festival/${idfestival}`}>
        En savoir plus
      </Link>
    </div>
  );
};

Date.propTypes = {
  idfestival: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Date;
