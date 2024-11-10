import { useState, useEffect } from "react";
import img from "../../assets/Logo.png";
import { ContentType } from "../../Types/SliderContentType.ts";
import styles from "./Header.module.scss";
import { FC } from "react";
import React from "react";

type HeaderProps = {
  mouseEnter: (type: ContentType) => void;
};

export const Header: FC<HeaderProps> = ({ mouseEnter }) => {
  const navLinks = [
    "Mac",
    "Iphone",
    "Ipad",
    "Watch",
    "Airpods",
    "TV и Дом",
    "Аксессуары",
    "Доставка",
  ];

  const [itemInBucket, setItemInBucket] = useState<number>(1);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const handleMouseEnter = (type: ContentType) => {
    mouseEnter(type);
  };

  useEffect(() => {
    const controller = new AbortController();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 420;

      if (scrollPosition >= threshold) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <header
      className={`${styles["header"]} ${
        isHeaderHidden ? styles["header-hidden"] : ""
      }`}
    >
      <img src={img} className={styles["logo"]} />
      <nav className={styles["nav-bar"]}>
        {navLinks.map((el) => (
          <a
            key={el}
            className={styles["nav-item"]}
            onMouseEnter={() => handleMouseEnter("menu")}
          >
            {el}
          </a>
        ))}
      </nav>
      <nav className={styles["nav-bucket-search"]}>
        <i
          className="fa-thin fa-magnifying-glass fa-lg"
          onClick={() => handleMouseEnter("search")}
          onMouseEnter={() => handleMouseEnter("search")}
        />
        <div className={styles["nav-bucket-search-shop-block"]}>
          <span>{itemInBucket}</span>
          <i className="fa-sharp fa-thin fa-bag-shopping fa-lg" />
        </div>
      </nav>
    </header>
  );
};
