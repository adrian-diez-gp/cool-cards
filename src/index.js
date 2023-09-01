import React from "react";
import White from "./White"
import Blue from "./Blue"
import Black from "./Black"
import Red from "./Red"
import Green from "./Green"
import Gold from "./Gold"
import App from "./App"
import ReactDOM from "react-dom";
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
    path: "/white",
    element: <White />
  },
  {
    path: "/blue",
    element: <Blue />
  },
  {
    path: "/black",
    element: <Black />
  },
  {
    path: "/red",
    element: <Red />
  },
  {
    path: "/green",
    element: <Green />
  },
  {
    path: "/gold",
    element: <Gold />
  }
  
]);




createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
