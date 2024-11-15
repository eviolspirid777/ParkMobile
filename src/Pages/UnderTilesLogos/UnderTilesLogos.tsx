import React from "react";
import styles from "./UnderTilesLogos.module.scss";

import appleImg from "./Logos/apple.png";
import dysonImg from "./Logos/dyson.png";
import samsungImg from "./Logos/samsung.png";
import sonyImg from "./Logos/sony.png";

export const UnderTilesLogos = () => {
  const images = [appleImg, dysonImg, samsungImg, sonyImg];

  return (
    <div className={styles["under-tiles-logos-block"]}>
      {images.map((image, key) => (
        <img src={image} key={key} />
      ))}
    </div>
  );
};
