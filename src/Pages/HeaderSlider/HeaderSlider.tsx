import { FC } from "react";
import styles from "./HeaderSlider.module.scss";

import img1 from "./MacBooks/1.png";
import img2 from "./MacBooks/2.png";
import img3 from "./MacBooks/3.png";

type HeaderSliderProps = {
  isContentVisible: boolean;
  handleMouseLeave: () => void;
};

export const HeaderSlider: FC<HeaderSliderProps> = ({
  handleMouseLeave,
  isContentVisible,
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
  return (
    <>
      <div
        onMouseEnter={() => handleMouseLeave()}
        onMouseLeave={() => handleMouseLeave()}
        className={
          styles[
            isContentVisible ? "blur-block-visible" : "blur-block-invisible"
          ]
        }
      />
      <div
        className={
          styles[
            isContentVisible
              ? "blur-block-content-visible"
              : "blur-block-content-invisible"
          ]
        }
      >
        <div className={styles["blur-block-content-visible-titles"]}>
          {titles.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
          {subTitles && (
            <>
              <hr style={{ backgroundColor: "#878375" }} />
              <div className={styles["blur-block-content-visible-subtitles"]}>
                {subTitles.map((el, index) => (
                  <span key={index}>{el}</span>
                ))}
              </div>
            </>
          )}
        </div>
        <div className={styles["blur-block-content-visible-items"]}>
          {items.map((item, index) => (
            <div
              key={index}
              className={styles["blur-block-content-visible-items-item-block"]}
            >
              <img
                src={item.image}
                className={
                  styles["blur-block-content-visible-items-item-block-image"]
                }
              />
              <div
                className={
                  styles[
                    "blur-block-content-visible-items-item-block-text-block"
                  ]
                }
              >
                <span
                  className={
                    styles[
                      "blur-block-content-visible-items-item-block-text-block-tag"
                    ]
                  }
                >
                  {item.tag}
                </span>
                <span
                  className={
                    styles[
                      "blur-block-content-visible-items-item-block-text-block-price"
                    ]
                  }
                >
                  {item.price} ₽
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
