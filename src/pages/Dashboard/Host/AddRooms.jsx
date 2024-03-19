import { Helmet } from "react-helmet";
import AddroomForm from "../../../components/Form/AddroomForm";
import { useState } from "react";
import { imageUpload } from './../../../api/utils';
import useAuth from './../../../components/hooks/useAuth';


const AddRooms = () => {
    const {user}= useAuth()
    const [loading, setLoading]=useState(false)
    const [uploadButtonText, setuploadButtonText]=useState("Upload Image")
    const [dates, setDates]=useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })


    const handleSubmit =async(e)=>{
        e.preventDefault();
       
        const form = e.target;
        const location =form.location.value;
        const category =form.category.value;
        const title =form.title.value;
        const to =dates.endDate;
        const from=dates.startDate;
        const price = form.price.value;
        const guest= form.guest.value;
        const bathrooms =form.bathrooms.value;
        const bedrooms =form.bedrooms.value;
        const description = form.des.value;
        const host={
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }
        const image = form.image.files[0]

        const image_url= await imageUpload(image)
   
   
        const roomsData={
            location,
            category,
            title,
            to,
            from,
            price,
            guest,
            bathrooms,
            bedrooms,
            description,
            image:image_url?.data?.display_url,
            host
        }

        console.log(roomsData);

    }

   


    const handleDates =(ranges)=>{
       setDates(ranges.selection)
    }


    const handleImageChange =(image)=>{
        setuploadButtonText(image.name)
    }



    return (
        <div>
            <Helmet>
                <title>Add room</title>
            </Helmet>
            {/* add room form*/}
            <div>
                 <AddroomForm 
                 handleSubmit={handleSubmit}
                 handleDates={handleDates}
                 dates={dates}
                 handleImageChange={handleImageChange}
                 loading={loading}
                 uploadButtonText={uploadButtonText}
                 />
            </div>
        </div>
    );
};

export default AddRooms;