import twitterLogo from "../../../assets/twitterlogo.png";
import facebookLogo from "../../../assets/facebooklogo.png";
import instagramLogo from "../../../assets/instagramlogo.png";

const burgerMenuData = {
  logosList: [
    { className: "twitter", src: twitterLogo, alt: "twitter" },
    { className: "facebook", src: facebookLogo, alt: "facebook" },
    { className: "instagram", src: instagramLogo, alt: "instagram" },
  ],

  itemBurgerMenuList: [
    { menu: "Artistes", lien: "/artiste" },
    { menu: "Festivals", lien: "/festival" },
    { menu: "Contactez-nous", lien: "/contact" },
  ],
};
export default burgerMenuData;
