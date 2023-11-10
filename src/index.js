import React from "react";
import MainWoe from "./woe/MainWoe"
import MainLci from "./lci/MainLci"
import WoeWhite from "./woe/White"
import LciWhite from "./lci/White"
import WoeBlue from "./woe/Blue"
import LciBlue from "./lci/Blue"
import WoeBlack from "./woe/Black"
import LciBlack from "./lci/Black"
import WoeRed from "./woe/Red"
import LciRed from "./lci/Red"
import WoeGreen from "./woe/Green"
import LciGreen from "./lci/Green"
import WoeGold from "./woe/Gold"
import LciGold from "./lci/Gold"
import Specialsheet from "./woe/Specialsheet"
import App from "./App"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/woe",
    element: <MainWoe />
  },
  {
    path: "/lci",
    element: <MainLci />
  },
  {
    path: "/woe/white",
    element: <WoeWhite />
  },
  {
    path: "/lci/white",
    element: <LciWhite />
  },
  {
    path: "/woe/blue",
    element: <WoeBlue />
  },
  {
    path: "/lci/blue",
    element: <LciBlue />
  },
  {
    path: "/woe/black",
    element: <WoeBlack />
  },
  {
    path: "/lci/black",
    element: <LciBlack />
  },
  {
    path: "/woe/red",
    element: <WoeRed />
  },
  {
    path: "/lci/red",
    element: <LciRed />
  },
  {
    path: "/woe/green",
    element: <WoeGreen />
  },
  {
    path: "/lci/green",
    element: <LciGreen />
  },
  {
    path: "/woe/gold",
    element: <WoeGold />
  },
  {
    path: "/lci/gold",
    element: <LciGold />
  },
  {
    path: "/woe/specialsheet",
    element: <Specialsheet />
  }
  
]);




createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
