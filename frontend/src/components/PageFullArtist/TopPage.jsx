import React, { useEffect, useState } from "react";
import "./TopPage.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import image from "./assets/page-favori2.png";

const TopPage = () => {
  const [artiste, setArtiste] = useState([]);
  const getArtiste = () => {
    const url = "https://wild-festival.herokuapp.com/api/artists";
    axios.get(url).then((response) => {
      setArtiste(response.data);
    });
  };
  useEffect(() => {
    getArtiste();
  }, []);

  return (
    <div className="topPage">
      <AnimatePresence>
        <motion.div
          className="topPage__background"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="topPage__swiper">
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
              className="mySwiper"
            >
              {artiste.map((element) => (
                <SwiperSlide>
                  <img src={element.image_url} alt="" />
                  <h3>{element.name}</h3>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <img className="img" src={image} alt="" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TopPage;
