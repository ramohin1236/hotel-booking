import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from "../../components/Shared/Container";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../../components/SingleRoomInformation/Header";
import SingleRoomInfo from "../../components/SingleRoomInformation/SingleRoomInfo";
import Facilities from "../Home/Facilities";
import RoomInformationo from "./RoomInformationo";
import RoomReservation from "./RoomReservation";



const SingleRooms = () => {
          const room = useLoaderData()
     console.log(room);
     
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

       return (
        <div>
            
            <Container>
                <Helmet>
                    <title>{room?.title}</title>
                </Helmet>
                
            <ImageGallery items={images} />
                
                 <Header  room={room} subtitle={room.category}/>
               <div className="flex justify-between max-sm:flex-col ">
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