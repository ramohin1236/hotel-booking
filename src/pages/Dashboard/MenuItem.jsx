/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MenuItem = ({label, address, icon: Icon}) => {
    return (
        <NavLink to={address}
        end className={({isActive})=>
            `flex items-center rounded-lg px-4 my-5 transition-colors duration-300 hover:bg-gray-700 hover:text-white ${isActive? "bg-gray-300 text-gray-700" : "text-gray-600"}`
        }
        >
          <div className="flex py-4">
          <Icon className="w-5 h-5"/>

<span className="mx-4 font-medium">{label}</span> 
          </div>
        </NavLink>
    );
};

export default MenuItem;