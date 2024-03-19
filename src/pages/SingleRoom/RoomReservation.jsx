/* eslint-disable react/prop-types */

import { formatDistance } from "date-fns";
import Calender from "./Calender";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RoomReservation = ({room}) => {
    console.log(room?.from_date);
     const [value, setValue] =useState({
        startDate: room && room.from_date ? new Date(room.from_date) : null,
    endDate: room && room.to_date ? new Date(room.to_date) : null,
        key: 'selection'
     })

     useEffect(() => {
        setValue({
          startDate: room && room.from_date ? new Date(room.from_date) : null,
          endDate: room && room.to_date ? new Date(room.to_date) : null,
          key: 'selection'
        });
      }, [room]);
    
    let totalPrice = 0; // Declare totalPrice outside of the block scope

    if (room?.to_date && room?.from_date) {
        const totalDays = parseInt(formatDistance(new Date(room.to_date), new Date(room.from_date)).split(' ')[0]);
        totalPrice = totalDays * room?.price; // Assign value to totalPrice
    }
 





    return (
        <div className=" border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
             <div className="text-2xl font-semibold text-center items-center w-full"> ${room?.price} /night</div>
            
            </div>
            
            <div className="flex justify-center">
               <Calender value={value}/>
            </div>
            <div className=" text-center mt-4">
            <Link to='/reserve'><button className="btn bg-blue-500 text-white hover:bg-blue-700 w-52  h-12">Reserve</button></Link>
            </div>
            <div className="flex justify-evenly mt-6">
                <p className="text-xl font-bold">Total Price:</p>
                <p className="font-bold text-2xl"> $ {totalPrice}</p>
            </div>
           
        </div>
    );
};

export default RoomReservation;