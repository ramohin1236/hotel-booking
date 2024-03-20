import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Main from "../layOuts/Main";
import Rooms from "../pages/Rooms/Rooms";
import SingleRooms from "../pages/SingleRoom/SingleRooms";
import Login from "../pages/Login/Login";
import Reserve from "../pages/Reserve/Reserve";
import PrivateRoutes from "./PrivateRoutes";
import { getSingleRoom } from "../api/rooms";
import DashboardLayout from "../layOuts/DashboardLayout";
import AddRooms from "../pages/Dashboard/Host/AddRooms";
import MyListing from "../pages/Dashboard/Host/MyListing";
import ManageBookings from "../pages/Dashboard/Host/ManageBookings";




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
            path:"/reserve",
            element: <PrivateRoutes><Reserve/></PrivateRoutes>
        },
       
        {
            path:"/rooms/:id",
            element: <PrivateRoutes><SingleRooms/></PrivateRoutes>,
            loader: ({params})=>getSingleRoom(params.id)
        },
      ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path:"/dashboard",
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children:[
            {
                path: 'add-room',
                element:<AddRooms/>
            },
            {
                path: 'listing',
                element:<PrivateRoutes><MyListing/></PrivateRoutes>
            },
            {
                path: 'm-bookings',
                element:<ManageBookings/>
            },
        ]
    },
  ]);