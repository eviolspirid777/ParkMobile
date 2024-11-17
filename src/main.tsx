import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router/Providers/RouterProvider.tsx";
import { YMaps } from "@pbe/react-yandex-maps";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <YMaps>
        <Router />
      </YMaps>
    </QueryClientProvider>
  </StrictMode>
);
