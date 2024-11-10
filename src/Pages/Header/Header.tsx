import img from "../../assets/Logo.png";
import styles from "./Header.module.scss";
import { FC, useState } from "react";

type HeaderProps = {
  mouseEnter: () => void;
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

  return (
    <header className={styles["header"]}>
      <img src={img} className={styles["logo"]} />
      <nav className={styles["nav-bar"]}>
        {navLinks.map((el) => (
          <a key={el} className={styles["nav-item"]} onMouseEnter={mouseEnter}>
            {el}
          </a>
        ))}
      </nav>
      <nav className={styles["nav-bucket-search"]}>
        <i className="fa-thin fa-magnifying-glass fa-lg"></i>
        <div className={styles["nav-bucket-search-shop-block"]}>
          <span>{itemInBucket}</span>
          <i className="fa-sharp fa-thin fa-bag-shopping fa-lg"></i>
        </div>
      </nav>
    </header>
  );
};
