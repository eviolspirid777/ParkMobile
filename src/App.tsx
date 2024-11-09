import "./App.scss";
import {Header} from "./Pages/Header/Header.tsx";
import { PopularItems } from "./Pages/PopularItems/PopularItems.tsx";
import {SwiperList} from "./Pages/Swiper/Swiper.tsx";
import {UnderSwiperCards} from "./Pages/UnderSwiperCards/UnderSwiperCards.tsx";

export const App = () => {
  return (
    <>
      <Header />
      <SwiperList />
      <UnderSwiperCards />
      <PopularItems />
    </>
  );
};
