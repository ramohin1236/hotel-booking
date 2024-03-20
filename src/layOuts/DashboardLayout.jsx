import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";


const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen flex">
            {/* sidebar components */}
          
             <div className="">
             <Sidebar/>
             </div>
        
            <div className="md:ml-96 mt-24 ml-6 ">
               
                {/* {outlet for dianamic contert} */}
                  <Outlet/>
              
            </div>
        </div>
    );
};

export default DashboardLayout;