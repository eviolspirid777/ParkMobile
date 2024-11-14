import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import styles from "./Categories.module.scss";
import { useAtom } from "jotai";
import { filtersAtom } from "../../../Store/FiltersStore";

export const Categories = () => {
  const categoriesItems = [
    "Все",
    "iPhone",
    "iPad",
    "Watch",
    "Mac",
    "Airpods",
    "Аксессуары",
    "Гаджеты",
    "Аудио",
    "Смартфоны",
    "Гейминг",
    "Красота и здоровье",
    "TV и Дом",
    "Популярное",
  ];

  const [filters, setFilters] = useAtom(filtersAtom);
  const [selectedValue, setSelectedValue] = useState(categoriesItems[0]);

  useEffect(() => {
    if(!filters) {
      setSelectedValue(categoriesItems[0])
    }
  }, [filters])


  const spanRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 2900) {
        setTimeout(() => {
          categoriesItems.forEach((_, index) => {
            const spanElement = spanRefs.current[index];

            if (spanElement) {
              const delay = index * 0.05;

              gsap.fromTo(
                spanElement,
                {
                  opacity: 0,
                  y: 30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power2.out",
                  delay: delay,
                }
              );
            }
          });
        }, 400);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCategory = (event: React.MouseEvent<HTMLSpanElement>) => {
    const newFilter = event.currentTarget.textContent ?? ""
    setSelectedValue(newFilter)
    setFilters(newFilter)
  }

  return (
    <div className={styles["categories-block"]}>
      {categoriesItems.map((el, index) => (
        <span
          key={index}
          ref={(el) => (spanRefs.current[index] = el!)}
          style={el === selectedValue ? {
            backgroundColor: "#abbcae",
            color: "white"
          } : {}}
          onClick={handleCategory}
        >
          {el}
        </span>
      ))}
    </div>
  );
};
