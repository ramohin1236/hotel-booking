/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../components/hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading}= useAuth()
    const location = useLocation()

    if (loading)return <p>Loading...</p>
    if(user) return children
    return <Navigate to='/login' state={{from: location}} replace='true'/>
   
};

export default PrivateRoutes;