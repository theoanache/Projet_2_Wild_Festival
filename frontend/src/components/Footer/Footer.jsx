import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import FooterData from "./utils/FooterData";
import footeryellow from "../../assets/footeryellow.png";
import footerblue from "../../assets/footerblue.png";
import wildFestivalLogo from "../../assets/logo-wild-festival.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img
          src={footeryellow}
          alt="footer"
          className="footer-img footer-yellow"
        />
        <img src={footerblue} alt="footer" className="footer-img footer-blue" />
        <div className="footer-content">
          <img
            src={wildFestivalLogo}
            alt="wild-festival"
            className="wild-festival-logo"
          />
          <div className="footer-infos">
            <div className="footer-social-network">
              {FooterData.socialNetwork.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="cursor"
                />
              ))}
            </div>
            <div className="footer-infos-legales">
              <Link className="ContactUs" to="/contact">
                <h2 className="cursor">Nous contacter</h2>
              </Link>
              <div className="footer-infos-legales-lien-page">
                {FooterData.liensInfosLegales.map((lien) => (
                  <Link key={lien.id} to={lien.link}>
                    {lien.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
