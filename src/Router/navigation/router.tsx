import { type RouteObject, createBrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "../../App";
import { Catalog } from "../../Pages/Catalog/Catalog";
import { PopularItems } from "../../Pages/PopularItems/PopularItems";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/category/:category",
        element: <Catalog />,
      },
      {
        path: "/popular-items",
        element: <PopularItems />,
      },
    ],
  },
] as Array<RouteObject>;

export const router = createBrowserRouter(routes);
