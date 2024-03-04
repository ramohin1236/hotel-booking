/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string';

const CategoriesBox = ({label, icon: Icon,selected}) => {

    const [params, setParams]= useSearchParams();

    const navigate =useNavigate()

    const handleSearch =()=>{
       let currentQuery = {};

       if(params){
        currentQuery = qs.parse(params.toString());
       }
        const updatedQuery ={...currentQuery, category: label}

        const url = qs.stringifyUrl({
            url: '/rooms',
            query: updatedQuery,
        })
        navigate(url)
       
    }


    return (
        <div onClick={handleSearch} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected? "border-b-neutral-700 text-black" : " text-neutral-500"}`}>
            <Icon size={26}/>
            <div className="text-sm font-medium">{label}</div>
            
        </div>
    );
};

export default CategoriesBox;