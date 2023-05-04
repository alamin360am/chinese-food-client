import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import ErrorPage from "./components/404Page/ErrorPage";
import ChefRecipes from "./components/ChefRecipes/ChefRecipes";
import LogIn from "./Pages/LogIn/LogIn";
import Register from "./Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      }, 
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      }

      // {
      //   path: "/",
      //   element: <Home></Home>,
      //   loader: () => fetch('http://localhost:5000/data')
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);