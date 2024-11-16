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
import { animateScroll as scroll } from "react-scroll";

export const Catalog = () => {
  const [storeItems, setStoreItems] = useAtom(itemsAtom);
  const [storeCategory, setStoreCategory] = useAtom(categoryAtom);

  const [skip, setSkip] = React.useState(0);
  const [take] = React.useState(16);

  const [currentPage, setCurrentPage] = React.useState(1);

  const {
    data: items,
    refetch,
    isLoading: isLoadingAll,
  } = useQuery({
    queryKey: ["items", skip, take],
    queryFn: async () => {
      const response = await axios.get<RecivedCardDataType>(
        `api/ItemsPostgre?skip=${skip}&take=${take}`
      );
      const data = response.data;
      return data;
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: fetchFilteredItems,
    data: categoryItems,
    isPending: isPendingCategory,
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

  const handleOnPageChange = (newSkip: number, newPage: number) => {
    scroll.scrollTo(3800, {
      duration: 700,
      smooth: true,
    });

    setSkip(newSkip);
    setCurrentPage(newPage);
    refetch();
  };

  useEffect(() => {
    if (storeCategory) {
      fetchFilteredItems(storeCategory);
    }
  }, [storeCategory, fetchFilteredItems]);

  if (isLoadingAll || isPendingCategory) {
    return <div className="">Loading...</div>;
  }

  return (
    <div className={styles["catalog-block"]}>
      <CatalogHeader />
      <Categories />
      <FilterTile itemsCount={categoryItems?.count || items?.count} />
      <Products
        cards={categoryItems?.items || items?.items}
        itemsCount={categoryItems?.count || items?.count}
        currentPage={currentPage}
        onPageChange={handleOnPageChange}
      />
    </div>
  );
};
