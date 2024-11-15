import React, { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { ProductCard } from "./ProductCard/ProductCard";

import { itemsAtom } from "../../../Store/ItemsStore";
import { useAtom } from "jotai";

export const Products = () => {
  const [itemsFromStore, setItemsFromStore] = useAtom(itemsAtom);
  // const [items, setItems] = useState(itemsFromStore);
  // for (let i = 16; i < itemsFromStore.length; i + 16) {
  //   const itemsPack = itemsFromStore.slice(0, 16);
  //   setItems((previousItems) => [...previousItems, itemsPack]);
  // }

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  return (
    <div>
      <div className={styles["product-cards-block"]}>
        {itemsFromStore.map((el, index) => (
          <ProductCard key={index} item={el} />
        ))}
      </div>
    </div>
  );
};
