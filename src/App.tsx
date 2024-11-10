import { useState } from "react";
import "./App.scss";
import { Header } from "./Pages/Header/Header.tsx";
import { PopularItems } from "./Pages/PopularItems/PopularItems.tsx";
import { SwiperList } from "./Pages/Swiper/Swiper.tsx";
import { UnderSwiperCards } from "./Pages/UnderSwiperCards/UnderSwiperCards.tsx";
import { HeaderSlider } from "./Pages/HeaderSlider/HeaderSlider.tsx";

export const App = () => {
  const [isHeaderMenuVisible, setIsHeaderMenuVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHeaderMenuVisible(true);
    setIsContentVisible(true);
  };

  const handleMouseLeave = () => {
    setIsContentVisible(false);
    setTimeout(() => {
      setIsHeaderMenuVisible(false);
    }, 800);
  };

  return (
    <>
      <Header mouseEnter={handleMouseEnter} />
      {isHeaderMenuVisible && (
        <HeaderSlider
          handleMouseLeave={handleMouseLeave}
          isContentVisible={isContentVisible}
        />
      )}
      <SwiperList />
      <UnderSwiperCards />
      <PopularItems />
    </>
  );
};
