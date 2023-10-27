import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage/BlogDetailPage.jsx";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage.jsx";

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
    element: <ItemDetailPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <main className="box-border font-poppins">
    <RouterProvider router={router} />
  </main >
);
