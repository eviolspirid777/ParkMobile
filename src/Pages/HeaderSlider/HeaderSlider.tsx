import { FC, useEffect } from "react";
import styles from "./HeaderSlider.module.scss";

import { ReducerAction } from "../../App";

import img1 from "./MacBooks/1.png";
import img2 from "./MacBooks/2.png";
import img3 from "./MacBooks/3.png";
import { SliderMenu } from "./SliderMenu/SliderMenu";
import React from "react";
import { SliderSearch } from "./SliderSearch/SliderSearch";

type HeaderSliderProps = {
  isContentVisible: boolean;
  handleIsContentVisible: () => void;
  handleMouseLeave: () => void;
  contentType: ReducerAction;
};

export const HeaderSlider: FC<HeaderSliderProps> = ({
  handleMouseLeave,
  isContentVisible,
  handleIsContentVisible,
  contentType,
}) => {
  useEffect(() => {
    const controller = new AbortController();
    window.addEventListener(
      "scroll",
      () => {
        handleIsContentVisible();
      },
      { signal: controller.signal }
    );
    return () => controller.abort();
  }, []);

  return (
    <>
      <div
        onMouseEnter={() => handleMouseLeave()}
        className={
          styles[`blur-block-${isContentVisible ? "visible" : "invisible"}`]
        }
      />
      <div
        id="blur-block"
        className={
          styles[
            `blur-block-content-${isContentVisible ? "visible" : "invisible"}`
          ]
        }
      >
        {contentType.type === "menu" ? (
          <SliderMenu
            items={contentType.items}
            subTitles={contentType.subTitles}
            titles={contentType.titles}
          />
        ) : (
          <SliderSearch />
        )}
      </div>
    </>
  );
};
