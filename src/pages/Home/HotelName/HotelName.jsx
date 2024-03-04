/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Container from './../../../components/Shared/Container';
import HotelNameCart from './HotelNameCart';
import { TypeAnimation } from 'react-type-animation';

const HotelName = () => {
    const [hotelname,setHotelname]=useState([]);

    useEffect(()=>{
        fetch("/public/hotelname.json")
        .then(res=>res.json())
        .then(data=>setHotelname(data))
    },[])
    return (
        <Container>
        <div className='mt-16 mb-16'>
     
        <p className='text-4xl font-bold mb-6 text-blue-700 '>Top destinations for Cox's Bazar city trips</p>
          <p className='text-xl text-slate-600'>Find hotels in some of the most popular city at Cox's Bazar</p>
        </div>
    
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 '>
                  {
                    hotelname.map((hltname)=><HotelNameCart key={hltname.id}
                    hltname={hltname}/>)
                  }
           </div>
                <div className='text-end'>
                <TypeAnimation
            className=' text-end max-sm:text-3xl max-sm:ml-10 text-xl font-bold '
      sequence={[
        1000,
        'For more information and booking for rooms go to "Rooms"',
        
        
        // Types 'One'
       
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
     
    />
                </div>
     </Container>
    );
};

export default HotelName;