import React, { useEffect } from "react";

import styles from "./Catalog.module.scss";
import { CatalogHeader } from "./Header/CatalogHeader";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { FilterTile } from "./Products/FilterTile/FilterTile";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RecivedCardDataType } from "../../Types/CardType";
import { useAtom } from "jotai";
import { itemsAtom } from "../../Store/ItemsStore";
import { categoryAtom, categoryDictionary } from "../../Store/FiltersStore";

export const Catalog = () => {
  const [storeItems, setStoreItems] = useAtom(itemsAtom);
  const [storeCategory, setStoreCategory] = useAtom(categoryAtom);

  const { data: items, isFetched: isFetchedAll } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axios.get<RecivedCardDataType>(
        "api/ItemsPostgre?skip=0&take=20"
      );
      const data = response.data;
      return data;
    },
  });

  const {
    mutate: fetchFilteredItems,
    data: categoryItems,
    isSuccess: isFetchedCategory,
  } = useMutation({
    mutationKey: ["filter"],
    mutationFn: async (category: string) => {
      const response = await axios.post<RecivedCardDataType>(
        `api/ItemsPostgre/category?category=${categoryDictionary.get(category)}`
      );
      const data = response.data;
      setStoreItems(data);
      return data;
    },
  });

  useEffect(() => {
    if (storeCategory) {
      fetchFilteredItems(storeCategory);
    }
  }, [storeCategory, fetchFilteredItems]);

  if (isFetchedAll || isFetchedCategory) {
    return (
      <div className={styles["catalog-block"]}>
        <CatalogHeader />
        <Categories />
        <FilterTile />
        <Products cards={categoryItems?.items || items?.items} />
      </div>
    );
  }

  return (
    <div className={styles["catalog-block"]}>
      <CatalogHeader />
      <Categories />
      <FilterTile />
      <Products />
    </div>
  );
};
