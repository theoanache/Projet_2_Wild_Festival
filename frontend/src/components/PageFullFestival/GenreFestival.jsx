import axios from "axios";
import React, { useEffect, useState } from "react";
import DivCardFestival from "./DivCardFestival";
import "./GenreFestival.css";
import DataCountries from "./utils/DataCountries";

const GenreFestival = () => {
  const [allFestivall, setAllFestival] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");

  const getAllFestival = () => {
    const url2 = "https://wild-festival.herokuapp.com/api/festivals";
    axios.get(url2).then((response) => {
      setAllFestival(response.data);
    });
  };

  const handleChange = (event) => {
    setSelectedStyle(event.target.value);
  };

  useEffect(() => {
    getAllFestival();
  }, []);

  return (
    <div className="chooseStyle">
      <div>
        <form>
          <select className="select" onChange={handleChange}>
            <option className="selected" value="">
              Filtrer par genre
            </option>
            {DataCountries.map((country) => (
              <option
                className="option"
                key={country.idstyle}
                value={country.idstyle}
              >
                {country.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      <ul>
        {allFestivall
          .filter(
            (festival) =>
              selectedStyle === "" || festival.country === selectedStyle
          )
          .map((festival) => (
            <li key={festival.idfestival}>
              <DivCardFestival
                id={festival.idfestival}
                usernameFestival={festival.name}
                logo={festival.logo}
                description={festival.description}
                video={festival.url_video}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GenreFestival;
