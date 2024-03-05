import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Main from "../layOuts/Main";
import Rooms from "../pages/Rooms/Rooms";
import SingleRooms from "../pages/SingleRoom/SingleRooms";


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
        {
            path:"/rooms",
            element: <Rooms/>
        },
        {
            path:"/rooms/:id",
            element: <SingleRooms/>
        },
      ]
    },
  ]);