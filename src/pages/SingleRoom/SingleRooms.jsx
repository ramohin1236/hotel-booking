import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";



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
            <p>{room?.title}</p>
            </Container>
        </div>
    );
};

export default SingleRooms;