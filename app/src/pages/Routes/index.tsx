import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ViewMaterialList from "src/pages/Material/View/List/MaterialListView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>PRIMEIRA TELA</p>,
  },
  {
    path: "/adicionar-lista",
    element: <ViewMaterialList />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
