import axios from "axios";
import React, { useEffect, useState } from "react";
import DivCard from "./DivCard";
import "./gender.css";

const GenreFestival = () => {
  const [styles, setStyle] = useState([]);
  const [allArtists, setAllArtists] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");

  const getStyle = () => {
    const url = "https://wild-festival.herokuapp.com/api/styles";
    axios.get(url).then((response) => {
      setStyle(response.data);
    });
  };

  const getAllFestival = () => {
    const url2 = "https://wild-festival.herokuapp.com/api/artists";
    axios.get(url2).then((response) => {
      setAllArtists(response.data);
    });
  };

  const handleChange = (event) => {
    setSelectedStyle(event.target.value);
  };

  useEffect(() => {
    getStyle();
    getAllFestival();
  }, []);

  return (
    <div className="chooseStyle">
      <div>
        <form>
          <select className="select" onChange={handleChange}>
            <option value="">Filtrer par genre</option>
            {styles.map((style) => (
              <option key={style.idstyle} value={style.idstyle}>
                {style.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <ul>
        {allArtists
          .filter(
            (artist) =>
              selectedStyle === "" || artist.id_style === Number(selectedStyle)
          )
          .map((artist) => (
            <li key={artist.idartist}>
              <DivCard
                username={artist.name}
                image={artist.image_url}
                description={artist.description}
                music={artist.music_url}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GenreFestival;
