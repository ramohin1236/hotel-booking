import { Helmet } from "react-helmet";
import useAuth from "../../../components/hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { getHostRoom } from "../../../api/rooms";

const MyListing = () => {
    const {user} =useAuth();
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
        getHostRoom(user?.email)
        .then(data=>{
            console.log(data);
            setRooms(data)})
    },[user])
    return (
        <div>
            <Helmet>
                <title>My Listing</title>
            </Helmet>

         <div className="container mx-auto px-4 sm:px-8">
         <div className="overflow-x-auto border-2 ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>From</th>
        <th>To</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        rooms?.map((room)=><>
        <tr>
      
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={room?.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td>
        <div>
              <div className="font-bold">{room?.title}</div>
              <div className="text-sm opacity-50">{room?.location}</div>
            </div>
        </td>
        <td>
          $ {room?.price}
          
         
        </td>
        <td>{ room?.from}</td>
        <td>{ room?.to}</td>
        <th>
          <button className="btn btn-ghost btn-xs bg-red-300">Delete</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs bg- bg-green-300">Update</button>
        </th>
      </tr>
        </>)
      }
    
    
    
    </tbody>
   
    
  </table>
</div>
         </div>
        </div>
    );
};

export default MyListing;