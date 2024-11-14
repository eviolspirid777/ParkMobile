import React from "react"
import styles from "./ProductCard.module.scss"
import { FullCardType } from "../../../../Types/CardType";

type ProductCardProps = {
  item: FullCardType
}

export const ProductCard: React.FC<ProductCardProps> = ({
  item,
}) => {
  return (
    <div
      className={styles["product-card"]}
    >
      <img src={item.image} />
      <div className={styles["product-card-text-block"]}>
        <label className={styles["product-card-text-block-tag"]}>{item.tag}</label>
        <span className={styles["product-card-text-block-price"]}>{item.price} ₽</span>
        <div className={styles["product-card-text-block-gurantee-tag"]}>Гарантия</div>
      </div>
    </div>
  )
}