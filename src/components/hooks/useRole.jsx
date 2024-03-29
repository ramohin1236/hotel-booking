/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "./useAuth"
import { getRole } from "../../api/auth";



 const useRole =()=>{
    const {user, loading}=useAuth();
    const [role, setRole]=useState(null)

    useEffect(()=>{
        getRole(user?.email)
        .then(data=>{
            setRole(data)
        })
    },[user])


    return [role]
}


export default useRole;