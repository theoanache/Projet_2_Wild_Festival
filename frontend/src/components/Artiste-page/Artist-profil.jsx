import React from "react";
import "./Artist-profil.css";
import PropTypes from "prop-types";
import youtubelogo from "./assets/youtube_logo.png";

const ArtistProfil = ({ artistName, artistGenre }) => {
  return (
    <div className="artist-profil">
      <div className="artist-description">
        <h1 className="artist-title">{artistName.name}</h1>
        <p>Genre : {artistGenre}</p>
        <p>Origine : {artistName.country}</p>
        <span />
        <a href={artistName.music_url} target="_blank" rel="noreferrer">
          <img className="youtube_logo" src={youtubelogo} alt="Logo YouTube" />
        </a>
      </div>
      <div className="artist-image">
        <img
          className="artist-image"
          src={artistName.image_url}
          alt={artistName.name}
        />
      </div>
    </div>
  );
};

ArtistProfil.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistGenre: PropTypes.string.isRequired,
};

export default ArtistProfil;
