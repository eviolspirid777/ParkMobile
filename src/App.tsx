import { useEffect, useReducer, useState } from "react";
import React from "react";
import "./App.scss";
import { ContentType } from "./Types/SliderContentType";
import { Header } from "./Pages/Header/Header";
import { HeaderSlider } from "./Pages/HeaderSlider/HeaderSlider";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Pages/Footer/Footer";
import { useAtom } from "jotai";
import { selectedRouteAtom } from "./Store/RouteStore";

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
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useAtom(selectedRouteAtom);

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

  const handleRouteCategory = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const category = event.currentTarget.text;
    setSelectedRoute(category);
    navigate(`/category/${category}`, { state: category });
  };

  const handleMainMenu = () => {
    navigate("/");
  };

  useEffect(() => {
    if (selectedRoute) {
      navigate(selectedRoute);
    }
  }, [selectedRoute]);

  return (
    <>
      <Header
        mouseEnter={handleMouseEnter}
        handleMouseClick={(event) => handleRouteCategory(event)}
        handleMainMenuRoute={handleMainMenu}
      />
      {isHeaderMenuVisible && (
        <HeaderSlider
          contentType={sliderData}
          handleMouseLeave={handleMouseLeave}
          isContentVisible={isContentVisible}
          handleIsContentVisible={handleMouseLeave}
        />
      )}
      <Outlet />
      <Footer />
    </>
  );
};
