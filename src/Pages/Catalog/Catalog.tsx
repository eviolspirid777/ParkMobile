import React from "react";

import styles from "./Catalog.module.scss";
import { CatalogHeader } from "./Header/CatalogHeader";
import { Categories } from "./Categories/Categories";

export const Catalog = () => {
  return (
    <div className={styles["catalog-block"]}>
      <CatalogHeader />
      <Categories />
    </div>
  );
};
