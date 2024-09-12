"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderBtn = ({ containerStyles, iconStyles, btnStyles }) => {
  const swiper = useSwiper(); // Get the swiper instance

  return (
    <div className="{containerStyles} flex justify-between">
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default SliderBtn;
