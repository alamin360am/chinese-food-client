import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/layouts/Main";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import ChefRecipes from "./components/ChefRecipes/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/data')
      },

      {
        path: '/blog',
        element: <Blog></Blog>
      },

      {
        path: '/:id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({params}) => fetch('http://localhost:5000/data')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);