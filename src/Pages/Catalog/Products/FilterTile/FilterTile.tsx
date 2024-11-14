import { useAtom } from "jotai"
import styles from "./FilterTile.module.scss"
import React from "react"
import { filtersAtom } from "../../../../Store/FiltersStore"


export const FilterTile = () => {
  const [filter, setFilter] = useAtom(filtersAtom);
  
  if(filter && filter !== "Все") {
    return <>
        <div className={styles["tile"]} onClick={setFilter.bind(this, null)}>
          {filter as string}
        </div>
        <span className={styles["total-items"]}>Найдено: INFINITY</span>
    </>
  }
}