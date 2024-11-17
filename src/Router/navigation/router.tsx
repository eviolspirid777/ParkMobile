import { type RouteObject, createBrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "../../App";
import { Catalog } from "../../Pages/Catalog/Catalog";
import { PopularItems } from "../../Pages/PopularItems/PopularItems";
import { AboutContacts } from "../../Pages/About/Contacts/AboutContacts";
import { MainComponent } from "../../Pages/Main/Main";
import { TradeInComponent } from "../../Pages/Help/TradeInComponent/TradeInComponent";
import { GuranteeComponent } from "../../Pages/Help/GuranteeComponent/GuranteeComponent";
import { DeliveryComponent } from "../../Pages/Help/DeliveryComponent/DeliveryComponent";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainComponent />,
      },
      {
        path: "/category/:category",
        element: <Catalog />,
      },
      {
        path: "/popular-items",
        element: <PopularItems />,
      },
      {
        path: "/about-contacts",
        element: <AboutContacts />,
      },
      {
        path: "/trade-in",
        element: <TradeInComponent />,
      },
      {
        path: "/gurantee",
        element: <GuranteeComponent />,
      },
      {
        path: "/delivery",
        element: <DeliveryComponent />,
      },
    ],
  },
] as Array<RouteObject>;

export const router = createBrowserRouter(routes);
