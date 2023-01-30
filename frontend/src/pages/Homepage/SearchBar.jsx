import React, { useState } from "react";
import "./SearchBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import louche from "../../assets/magnifying-glass1.png";
import epingle from "../../assets/add_location_btn1.png";

const SearchBar = ({ artist, festival }) => {
  const [value, setValue] = useState("");
  const [countriesPressed, setCountriesPressed] = useState(false);
  const [country, setCountry] = useState("Pays");
  const [mixedArray, setMixedArray] = useState([]);

  const [filterCountry, setFilterCountry] = useState(false);
  const array = [];
  function mixArray() {
    artist.map((art) => array.push(art));
    festival.map((fest) => array.push(fest));
    setMixedArray(array);
  }
  function Searching(e) {
    setValue(e.target.value);

    mixArray();

    if (!e.target.value) {
      setValue(null);
    }
  }
  const filteringCountry = () => {
    if (filterCountry) {
      festival.map(
        (element) =>
          element.country.includes(country) && (
            <div className="elementBox">
              {" "}
              <div className="artistBox">
                <img
                  src={element.image_url || element.image1}
                  alt=""
                  id="dropImage"
                />
                <h4 id="artistName">{element.name}</h4>
              </div>{" "}
            </div>
          )
      );
    }
  };

  const openCountries = () => {
    setCountriesPressed(!countriesPressed);
  };

  const selectedCountry = (e) => {
    openCountries();
    setCountry(e.currentTarget.innerText);
    setFilterCountry(true);
  };

  return (
    <div className="searchBarContainer">
      <div className="countrySelection">
        <div
          className="searchLocation"
          onClick={openCountries}
          role="button"
          tabIndex={0}
          onKeyDown={selectedCountry}
        >
          <h4 id="countryName">{country}</h4>
          <img src={epingle} alt="" id="pin" />
        </div>
        {countriesPressed && (
          <div className="dropCountries">
            <div
              className="country"
              id="France"
              onClick={selectedCountry}
              role="button"
              tabIndex={0}
              onKeyDown={selectedCountry}
            >
              <p>France</p>
            </div>
            <div
              className="country"
              id="Etats-Unis"
              onClick={selectedCountry}
              role="button"
              tabIndex={0}
              onKeyDown={selectedCountry}
            >
              <p>Etats-Unis</p>
            </div>
            <div
              className="country"
              id="Portugal"
              onClick={selectedCountry}
              role="button"
              tabIndex={0}
              onKeyDown={selectedCountry}
            >
              <p>Portugal</p>
            </div>
            <div
              className="country"
              id="Belgique"
              onClick={selectedCountry}
              role="button"
              tabIndex={0}
              onKeyDown={selectedCountry}
            >
              <p>Belgique</p>
            </div>
          </div>
        )}
      </div>
      <div className="searchInput">
        <div className="searchContainer">
          <div className="imageContainer">
            <img src={louche} alt="" id="louche" />
          </div>

          <input
            type="text"
            id="searchBar"
            placeholder="Artistes, Festivals"
            onChange={(e) => Searching(e)}
            onMouseDown={(e) => filteringCountry(e)}
          />
          <button type="button" id="searchButton">
            <p id="buttonText">Rechercher</p>
          </button>
        </div>
        {value ? (
          <div className="dropDown">
            <h3 id="dropCategory" style={{ whiteSpace: "nowrap" }}>
              Artistes, Festivals
            </h3>
            {!filterCountry
              ? mixedArray.map(
                  (element) =>
                    element.name.toLowerCase().includes(value) && (
                      <Link
                        to={
                          element.idartist
                            ? `/artiste/${element.name.toLowerCase()}`
                            : `/festival/${element.idfestival}`
                        }
                        id="link"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="elementBox">
                          {" "}
                          <div className="artistBox">
                            <img
                              src={element.image_url || element.image1}
                              alt=""
                              id="dropImage"
                            />
                            <h4 id="artistName">{element.name}</h4>
                          </div>{" "}
                        </div>
                      </Link>
                    )
                )
              : null}
          </div>
        ) : (
          filterCountry && (
            <div className="dropDown">
              <h3 id="dropCategoryFiltered">Festivals</h3>
              {festival.map(
                (element) =>
                  element.country.includes(country) && (
                    <Link to={`/festival/${element.idfestival}`} id="link">
                      <div className="elementBox">
                        {" "}
                        <div className="artistBox">
                          <img
                            src={element.image_url || element.image1}
                            alt=""
                            id="dropImage"
                          />
                          <h4 id="artistName">{element.name}</h4>
                        </div>{" "}
                      </div>
                    </Link>
                  )
              )}
            </div>
          )
        )}
      </div>{" "}
    </div>
  );
};
SearchBar.propTypes = {
  artist: PropTypes.string.isRequired,
  festival: PropTypes.func.isRequired,
};
export default SearchBar;
