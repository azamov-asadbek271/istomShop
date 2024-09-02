import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { Dastavka, HomeLayout, Landing, Magazin, Onas, Products, SingleProducts,Kontakt } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/singleProducts/:id",
          element: <SingleProducts />,
        },
        {
          path: "/kontakt",
          element: <Kontakt />,
        },
        {
          path: "/onas",
          element: <Onas />,
        },
        {
          path: "/magazin",
          element: <Magazin />,
        },
        {
          path: "/dastavka",
          element: < Dastavka/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}/>;
}

export default App