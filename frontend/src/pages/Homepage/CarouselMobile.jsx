import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./CarouselMobile.css";
import PropTypes from "prop-types";

const CarouselMobile = ({ slides }) => {
  return (
    <Slide>
      {slides.map((e) => (
        <div className="each-slide-effect">
          <div>
            <img src={e} alt="" id="slideMobile" />
          </div>
        </div>
      ))}
    </Slide>
  );
};
export default CarouselMobile;
CarouselMobile.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};
