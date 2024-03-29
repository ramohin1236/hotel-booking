
import { useState } from "react";
import { FaHome, FaToggleOn } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BsGraphUp } from "react-icons/bs";
import Togggle from "./Togggle";
import { BsDoorOpenFill } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import useAuth from "../../components/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useRole from "../../components/hooks/useRole";
import HostMenu from "../../components/Dashboard/HostMenu";
import GuestMenu from "../../components/Dashboard/GuestMenu";
import AdminMenu from "../../components/Dashboard/AdminMenu";



const Sidebar = () => {
    const {logOut}=useAuth();
    const navigate= useNavigate()
    const [toggle, setToggle] = useState(false);
    const [isActive, setActive] = useState(false);
 const [role]=useRole();
 console.log(role);
    console.log(toggle);

    const toggleHandler =( event) => {
        setToggle(event.target.checked);
    }

    const handlToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* small screen navbar */}
            <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
              
                    <div className="block cursor-pointer p-4 font-bold">
                        <p>Bookig.com</p>
                    </div>
              

                <button
                    onClick={handlToggle}
                    className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
                >
                    <FaToggleOn className="w-5 h-5" />
                </button>
            </div>
{/* sidebar */}
  <div className={`z-10 md:fixed h-full flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 ${isActive && '-translate-x-full'} md:translate-x-0 transition duration-200 ease-in-out h-full `}>

    <div>
        <div className="w-full  hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100">
            <p>Booking.com</p>
        </div>
        <div className="flex  flex-col justify-between flex-1 mt-6">
 {
    role === 'host'&&  <Togggle toggleHandler={toggleHandler}/>
 }
                <nav>
                    <MenuItem
                    label={"Statistics"}
                    icon={BsGraphUp}
                    address={'/dashboard'}
                    />

                    {role === 'host'? toggle?  <HostMenu/> : <GuestMenu/>: ""}
                    {/* {role === 'guest' &&  <GuestMenu/>} */}
                    {role === 'admin' &&  <AdminMenu/>}
                   
                   
                </nav>
</div>
    </div>
    <br />

                 <div>
                 <button
                 onClick={logOut}
                 className="flex w-full items-center px-4  text-gray-600 hover:bg-gray-300
  hover:text-gray-500
 ">
<CiLogout  className="w-5  text-gray-900 "/><span className="ml-4 font-medium">Log Out</span>
</button>
                 <MenuItem
                    label={"Profile"}
                    icon={IoIosSettings}
                    address={'/dashboard/profile'}
                    />


                 </div>



  </div>


               
           

        </>
    );
};

export default Sidebar;