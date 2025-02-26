import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/BodyList";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurantmenu from "./components/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
import Usercontext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const Applayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      name: "sumit",
    };
    setuserName(data.name);
  }, []);

  return (
    <>
      <Usercontext.Provider value={{ loggedInUser: userName ,setuserName}}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </Usercontext.Provider>
    </>
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
