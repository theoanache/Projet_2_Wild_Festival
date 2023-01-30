import React from "react";
import PropTypes from "prop-types";
import Artist from "./Artist";
import "./List-artist.css";

const ListArtist = ({ artist }) => {
  return (
    <div className="ListArtist">
      <h4 className="artist-text">Line-up :</h4>
      <div className="artist-container">
        {artist.map((element) => (
          <Artist
            key={element.idartist}
            image={element.image_url}
            name={element.name}
            country={element.country}
          />
        ))}
      </div>
    </div>
  );
};

ListArtist.propTypes = {
  artist: PropTypes.string.isRequired,
};

export default ListArtist;
