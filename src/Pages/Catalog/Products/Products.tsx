import React, { FC } from "react";
import styles from "./Products.module.scss";
import { ProductCard } from "./ProductCard/ProductCard";

import { CardType } from "../../../Types/CardType";

type ProductsType = {
  cards?: CardType[];
};

export const Products: FC<ProductsType> = ({ cards }) => {
  return (
    <div>
      <div className={styles["product-cards-block"]}>
        {cards &&
          cards.map((el, index) => <ProductCard key={index} card={el} />)}
      </div>
    </div>
  );
};
