import { useReducer, useState } from "react";
import "./App.scss";
import { Header } from "./Pages/Header/Header.tsx";
import { PopularItems } from "./Pages/PopularItems/PopularItems.tsx";
import { SwiperList } from "./Pages/Swiper/Swiper.tsx";
import { UnderSwiperCards } from "./Pages/UnderSwiperCards/UnderSwiperCards.tsx";
import { HeaderSlider } from "./Pages/HeaderSlider/HeaderSlider.tsx";
import { ContentType } from "./Types/SliderContentType.ts";
import React from "react";
import { Tiles } from "./Pages/Tiles/Tiles.tsx";
import { UnderTilesLogos } from "./Pages/UnderTilesLogos/UnderTilesLogos.tsx";
import { Catalog } from "./Pages/Catalog/Catalog.tsx";
import { InputFileComponent } from "./Pages/InputFileComponent/InputFileComponent.tsx";

export type ReducerAction = {
  type?: ContentType;
  titles?: string[];
  subTitles?: string[];
  items?: { image: string; tag: string; price: string }[];
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (
  state: unknown,
  { type, items, subTitles, titles }: ReducerAction
): ReducerAction => {
  return { type, items, subTitles, titles };
};

export const App = () => {
  const [isHeaderMenuVisible, setIsHeaderMenuVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [sliderData, dispatch] = useReducer(reducer, {});

  const handleMouseEnter = (
    type: ContentType,
    titles: string[] | undefined,
    subTitles: string[] | undefined
  ) => {
    setTimeout(() => {
      setIsHeaderMenuVisible(true);
      setIsContentVisible(true);
    }, 100);
    dispatch({ type, titles, subTitles });
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
      <Tiles />
      <UnderTilesLogos />
      <Catalog />
      <InputFileComponent />
    </>
  );
};
