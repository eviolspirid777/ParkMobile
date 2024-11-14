import React from "react";

import styles from "./Catalog.module.scss";
import { CatalogHeader } from "./Header/CatalogHeader";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { FilterTile } from "./Products/FilterTile/FilterTile";


export const Catalog = () => {
  return (
      //TODO: Сделать так, чтобы товары были на уровне с категориями
      <div className={styles["catalog-block"]}>
        <CatalogHeader />
        <Categories />
        <FilterTile />
        <Products />
      </div>
  );
};
