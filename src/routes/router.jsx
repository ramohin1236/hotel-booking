import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Main from "../layOuts/Main";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:"/",
            element: <Home/>
        },
      ]
    },
  ]);