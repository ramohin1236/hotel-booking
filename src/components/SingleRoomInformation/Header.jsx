/* eslint-disable react/prop-types */

const Header = ({room,subtitle}) => {
    return (
        <div>
            <p className="text-4xl font-bold text-blue-700 mx-12 mt-12">  {room.title}</p>
            <p className="text-xl font-bold text-slate-700 mx-12 mt-2 mb-12">  {subtitle}</p>
          
        </div>
    );
};

export default Header;