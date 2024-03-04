import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";


const Main = () => {
    return (
        <div>
             <Navbar/>
               <div className="pt-20 ">
                  <Outlet/>
               </div>
             <Footer/>
        </div>
    );
};

export default Main;