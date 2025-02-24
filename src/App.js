import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/BodyList";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
// import Shimmer from "./components/Shimmer";

const Grocery = lazy(() => import("./components/Grocery"));
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

export default Applayout;
