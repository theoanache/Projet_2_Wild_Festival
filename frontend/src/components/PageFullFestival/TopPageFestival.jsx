import React, { useEffect, useState } from "react";
import "./TopPageFestival.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import image from "./assets/page-favori2.png";

const TopPageFestival = () => {
  const [artiste, setArtiste] = useState([]);
  const getArtiste = () => {
    const url = "https://wild-festival.herokuapp.com/api/festivals";
    axios.get(url).then((response) => {
      setArtiste(response.data);
    });
  };
  useEffect(() => {
    getArtiste();
  }, []);

  return (
    <div className="topPageF">
      <AnimatePresence>
        <motion.div
          className="topPage__backgroundF"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="topPage__swiperF">
            <h1> ARTISTES </h1>
            <Swiper
              spaceBetween={300}
              centeredSlides
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiperF"
            >
              {artiste.map((element) => (
                <SwiperSlide key={element.idfestival}>
                  <img src={element.image1} alt="" />
                  <h3>{element.name}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <img className="imgF" src={image} alt="" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TopPageFestival;
