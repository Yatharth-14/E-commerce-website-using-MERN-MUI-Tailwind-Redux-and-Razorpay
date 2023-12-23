import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const HomeSectionCarousel = ({sectionName}) => {
  const [activeIndex, setActiveIndex]=useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const slidePrev =()=>setActiveIndex(activeIndex-1);
  const slideNext =()=>setActiveIndex(activeIndex+1);
  
  const syncActiveIndex=({item})=>setActiveIndex(item)

  const items = [1, 1, 1, 1, 1,1,1,1,1,1,1,1].map((item) => (
    <HomeSectionCard></HomeSectionCard>
  ));

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          disableButtonsControls
          // autoPlay
          // autoPlayInterval={2000}
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length-4 && <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{ position: "absolute", top: "8rem", right: "0rem", transform: 'translateX(50%) rotate(90deg)', backgroundColor:
        'white' }}
          aria-label="next"
        >
          <ChevronLeftIcon sx={{transform:'rotate(90deg)', color:'black'}}></ChevronLeftIcon>
        </Button>}
        {activeIndex!==0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{ position: "absolute", top: "8rem", left: "0rem", transform: 'translateX(-50%) rotate(-90deg)', backgroundColor:
        'white' }}
          aria-label="next"
        >
          <ChevronLeftIcon sx={{transform:'rotate(90deg)', color:'black'}}></ChevronLeftIcon>
        </Button>}

        
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
