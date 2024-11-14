import React from "react"
import styles from "./Products.module.scss"
import { ProductCard } from "./ProductCard/ProductCard"

import img1 from "./ProductsImages/Без имени.png"
import { FullCardType } from "../../../Types/CardType"


export const Products = () => {
  const products: FullCardType[] = [
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
    {
      image: img1,
      tag: "Watch 6 Classic 47mm",
      price: "21 290",
      gurantee: false,
    },
  ]


  return (
    <div className={styles["product-cards-block"]}>
      {
        products.map((el, index) => (
          <ProductCard
            key={index}
            item={el}
          />
        ))
      }
    </div>
  )
}