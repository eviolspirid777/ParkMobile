import { FC, useEffect } from "react";
import styles from "./HeaderSlider.module.scss";

import img1 from "./MacBooks/1.png";
import img2 from "./MacBooks/2.png";
import img3 from "./MacBooks/3.png";
import { SliderMenu } from "./SliderMenu/SliderMenu";
import { ContentType } from "../../Types/SliderContentType";
import { SliderSearch } from "./SliderSearch/SliderSearch";

type HeaderSliderProps = {
  isContentVisible: boolean;
  handleIsContentVisible: () => void;
  handleMouseLeave: () => void;
  contentType: ContentType;
};

export const HeaderSlider: FC<HeaderSliderProps> = ({
  handleMouseLeave,
  isContentVisible,
  handleIsContentVisible,
  contentType,
}) => {
  const titles = ["MacBook Air", "MacBook Pro", "iMac"];
  const subTitles = ["Apple Vision Pro", "AirPods", "Аксессуары"];

  const items = [
    {
      image: img1,
      tag: `MacBook air 15 2023,
            Midnight, 256 ГБ asdfas df asdf asdf asd f`,
      price: "133 500",
    },
    {
      image: img2,
      tag: `MacBook air 15 2024,
            Gray, 256 ГБ`,
      price: "133 500",
    },
    {
      image: img3,
      tag: `MacBook Pro 16 M3 2024,
            Black, 256 ГБ`,
      price: "133 500",
    },
  ];

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
        {contentType === "menu" ? (
          <SliderMenu items={items} subTitles={subTitles} titles={titles} />
        ) : (
          <SliderSearch />
        )}
      </div>
    </>
  );
};
