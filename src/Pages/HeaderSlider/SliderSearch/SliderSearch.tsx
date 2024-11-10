import { FC } from "react";
import styles from "./SliderSearch.module.scss";

type SliderSearchType = {
  searchWord?: string;
};

export const SliderSearch: FC<SliderSearchType> = ({
  searchWord = "HEllo",
}) => {
  const items = [
    "iPhone 16 PRO MAX 256 Гб",
    "Apple Vision Pro 512 Гб",
    "iPhone 14 PRO 128 Гб",
  ];

  const handleFamousItem = () => {};

  return (
    <div className={styles["search-block"]}>
      <div className={styles["search-box"]}>
        <button className={styles["btn-search"]}>
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          className={styles["input-search"]}
          placeholder="Поиск PARK MOBILE..."
        />
      </div>
      <h3 className={styles["search-most-famous-header"]}>
        Самое популярное...
      </h3>
      <ul className={styles["search-most-famous"]}>
        {items.map((el, index) => (
          <li key={index} onClick={handleFamousItem}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
