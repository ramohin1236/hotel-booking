import { FaBus } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const nav = <>
    <li className="text-xl font-medium"><a>Rooms</a></li>
    <li className="text-xl font-medium"><a>My Bookings</a></li>
    
    <button className="btn w-36 mr-6 md:mb-2 text-blue-800 font-bold">Sign In</button>
    <button className="btn w-36 max-sm:hidden text-blue-800 font-bold">Register</button>
    </>
    return (
        <div className="navbar my-nav bg-blue-900 text-white h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-800 rounded-box w-52">
             {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold "><FaBus/> Travel.Com</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-30 rounded-full">
          <img  alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
      </div>
    );
};

export default Navbar;