import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage/BlogDetailPage.jsx";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage.jsx";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import appState from "./data/appstate.js";
import Search from "./pages/SearchPage/Search.jsx";
import ShoppingList from "./pages/ShoppingList/ShoppingList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blogDetail",
    element: <BlogDetailPage />
  },
  {
    path: "/itemDetail",
    element: <ItemDetailPage />
  }, {
    path: "/login",
    element: <Login />
  }
  ,
  {
    path: "/signUp",
    element: <SignUp />
  }
  , {
    path: "/search",
    element: <Search />
  },
  {
    path: "/shoppingList",
    element: <ShoppingList />
  }
]);

appState.__init__();

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="box-border font-poppins">
    <ToastContainer />
    <RouterProvider router={router} />
  </main >
);
