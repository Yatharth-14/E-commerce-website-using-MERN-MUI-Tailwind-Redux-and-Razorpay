import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      src={item.image}
      role="presentation"
      alt="This is an image."
      className="cursor-pointer"
    />
  ));

  return (
    <AliceCarousel disableButtonsControls autoPlay autoPlayInterval={2000} infinite items={items}  />
  );
};

export default MainCarousel;
