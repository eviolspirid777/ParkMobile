import React from "react";
import styles from "./ProductCard.module.scss";
import { CardType } from "../../../../Types/CardType";

type ProductCardProps = {
  card: CardType;
};

export const ProductCard: React.FC<ProductCardProps> = ({ card }) => {
  return (
    <div className={styles["product-card"]}>
      <img src={card.image} />
      <div className={styles["product-card-text-block"]}>
        <label className={styles["product-card-text-block-tag"]}>
          {card.name}
        </label>
        <span className={styles["product-card-text-block-price"]}>
          {card.price} ₽
        </span>
        <div className={styles["product-card-text-block-gurantee-tag"]}>
          Гарантия
        </div>
      </div>
    </div>
  );
};
