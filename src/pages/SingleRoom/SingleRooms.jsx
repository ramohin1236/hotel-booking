import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/SingleRoomInformation/Header";
import SingleRoomInfo from "../../components/SingleRoomInformation/SingleRoomInfo";
import Facilities from "../Home/Facilities";
import RoomInformationo from "./RoomInformationo";
import Calender from "./Calender";
import RoomReservation from "./RoomReservation";



const SingleRooms = () => {
       const {id} =useParams()
          
       const [room, setRoom]=useState([])
       const [loading, setLoading]= useState(false)

       useEffect(()=>{
          fetch('/hoteldata.json')
          .then(res=>res.json())
          .then(data=>{
            const singleRoom =data.find(room=>room.booking_id === id)
            setRoom(singleRoom)
            setLoading(false)
          })
       },[id])
       const images = [
        {
          original: `${room.image}`,
          thumbnail: `${room.image}`,
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
      ];
       if(loading) return <span className="loading loading-bars loading-lg "></span>

       return (
        <div>
            
            <Container>
                <Helmet>
                    <title>{room?.title}</title>
                </Helmet>
                
            <ImageGallery items={images} />
                
                 <Header  room={room} subtitle={room.category}/>
               <div className="flex justify-between max-sm:flex-col">
                    <div className="flex-1">
                        <SingleRoomInfo room={room}/>
                    </div>

                    <div className="flex-1 ">
                       <RoomReservation room={room}/>
                    </div>
               </div>

               <div>
                    <Facilities/>
               </div>
                

                <div>
                    <RoomInformationo room={room}/>
                </div>






            </Container>
        </div>
    );
};

export default SingleRooms;