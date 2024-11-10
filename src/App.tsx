import { useReducer, useState } from "react";
import "./App.scss";
import { Header } from "./Pages/Header/Header.tsx";
import { PopularItems } from "./Pages/PopularItems/PopularItems.tsx";
import { SwiperList } from "./Pages/Swiper/Swiper.tsx";
import { UnderSwiperCards } from "./Pages/UnderSwiperCards/UnderSwiperCards.tsx";
import { HeaderSlider } from "./Pages/HeaderSlider/HeaderSlider.tsx";
import { ContentType } from "./Types/SliderContentType.ts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, { type }: { type: ContentType }): ContentType => {
  return type;
};

export const App = () => {
  const [isHeaderMenuVisible, setIsHeaderMenuVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [sliderData, dispatch] = useReducer(
    reducer,
    "menu" as ContentType,
    () => "menu" as ContentType
  );

  const handleMouseEnter = (type: ContentType) => {
    setTimeout(() => {
      setIsHeaderMenuVisible(true);
      setIsContentVisible(true);
    }, 100);
    dispatch({ type });
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
          contentType={sliderData}
          handleMouseLeave={handleMouseLeave}
          isContentVisible={isContentVisible}
          handleIsContentVisible={handleMouseLeave}
        />
      )}
      <SwiperList />
      <UnderSwiperCards />
      <PopularItems />
    </>
  );
};
