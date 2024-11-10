import { FC } from "react";
import { CardType } from "../../../Types/CardType";
import styles from "./SliderMenu.module.scss";

type SliderMenuProps = {
  isContentVisible: boolean;
  titles: string[];
  subTitles: string[];
  items: CardType[];
};

export const SliderMenu: FC<SliderMenuProps> = ({
  isContentVisible,
  titles,
  subTitles,
  items,
}) => {
  return (
    <>
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
            className={`${
              styles["blur-block-content-visible-items-item-block"]
            } ${isContentVisible ? styles["visible"] : styles["invisible"]}`}
          >
            <img
              src={item.image}
              className={
                styles["blur-block-content-visible-items-item-block-image"]
              }
            />
            <div
              className={
                styles["blur-block-content-visible-items-item-block-text-block"]
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
    </>
  );
};
