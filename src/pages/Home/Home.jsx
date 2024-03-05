/* eslint-disable react/no-unescaped-entities */
import videohotel from '../../assets/hotel.mp4';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";

import HotelName from './HotelName/HotelName';
import ImportantLines from './ImportantLines';
import { Helmet } from 'react-helmet-async';
import Facilities from './Facilities';
import HotelEco from '../../components/Home/HotelEco';
import Container from '../../components/Shared/Container';

const Home = () => {
    return (
        <div>
             <Helmet>
                 <title>Home/Travell.Com</title>
             </Helmet>
           <div className="">
           <video   className=" " src={videohotel} autoPlay loop muted/>
           <div style={{ backgroundColor: 'rgba(0, 0, 255, 0.6)' }} className='absolute  '>

           </div>
           </div>
            <div className='content'>
            <TypeAnimation
            className='max-sm:text-3xl max-sm:ml-10 text-6xl font-bold ml-24 '
      sequence={[
        1000,
        'Hotels are the longest Sea-Beach area in Bangladesh',
        1000,
        "Discover paradise on earth, where golden sands meet azure waters, and every sunset paints a masterpiece at Cox's Bazar.",
        1000,
        "Welcome to our at Cox's Bazar.",
        // Types 'One'
       
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
     
    />
               
                <p className='text-2xl ml-24 mt-4 max-sm:ml-10 font-semibold'>Enter your dates and choose from 617 hotels and other places to stay!</p>
                
            </div>
          
          <HotelName/>
          <Container>
          <p className="text-4xl text-blue-700 font-bold mb-16 mt-12">Facilities of Hotel Booking.Com</p> 

          </Container>
            <Facilities />
            <HotelEco/>

          <ImportantLines/>
        
        </div>
    );
};

export default Home;