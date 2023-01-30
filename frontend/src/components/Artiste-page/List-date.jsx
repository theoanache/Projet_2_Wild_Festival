import React from "react";
import PropTypes from "prop-types";
import Date from "./Date";
import "./List-date.css";

const ListDate = ({ festivalName }) => {
  return (
    <div className="ListDate">
      <h4 className="festival-text">Prochaines dates :</h4>
      <div className="festival-container">
        {festivalName.length > 0 ? (
          festivalName.map((element) => (
            <Date
              key={element.idfestival}
              idfestival={element.idfestival}
              name={element.name}
              image={element.image1}
              startDate={element.startDate}
              endDate={element.endDate}
              city={element.city}
              country={element.country}
            />
          ))
        ) : (
          <h3 className="no-date">Oups, pas de date prévue pour le moment.</h3>
        )}
      </div>
    </div>
  );
};

ListDate.propTypes = {
  festivalName: PropTypes.string.isRequired,
};

export default ListDate;
