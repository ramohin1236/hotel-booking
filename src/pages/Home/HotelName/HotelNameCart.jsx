/* eslint-disable react/prop-types */
import "./HotelNameCart.css";



const HotelNameCart = ({hltname}) => {
    const {hotel_name
,image,location    }=hltname
    console.log(hltname);
    return (
        <div className="mb-16">
            <div className="w-full h-full borderr">
            <img className="w-full h-80 rounded-md" src={image} alt="" />
           <div className="ml-2 mt-4 mb-6">
           <p className="text-2xl font-bold text-blue-700">{hotel_name}</p>
            <p className="text-slate-600">{location}</p>            
           </div>
            </div>

          
           
        </div>
    );
};

export default HotelNameCart;