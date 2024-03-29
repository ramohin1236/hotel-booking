import axios from "axios";
import { removeToken } from "./auth";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL ,
    withCredentials:true,
})


// interseptore

axiosSecure.interceptors.response.use(response=>response,
    async error=>{
        console.log("Error trancked in the interceptors", error.response);
        if(error.response && 
            (error.response.status === 401 || error.response.status === 403)){
               await removeToken()
           window.location.replace('/login')
            }

            return Promise.reject(error)

    }
    )

export default axiosSecure;