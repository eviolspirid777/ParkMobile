import React from "react";
import { SwiperList } from "../Swiper/Swiper";
import { UnderSwiperCards } from "../UnderSwiperCards/UnderSwiperCards";
import { Tiles } from "../Tiles/Tiles";
import { PopularItems } from "../PopularItems/PopularItems";
import { UnderTilesLogos } from "../UnderTilesLogos/UnderTilesLogos";
import { Catalog } from "../Catalog/Catalog";
import { InputFileComponent } from "../InputFileComponent/InputFileComponent";

export const MainComponent = () => {
  return (
    <>
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
