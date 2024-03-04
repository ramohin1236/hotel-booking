/* eslint-disable react/no-unescaped-entities */
import videohotel from '../../assets/hotel.mp4';
import { TypeAnimation } from 'react-type-animation';
import "./Home.css";

import HotelName from './HotelName/HotelName';
import ImportantLines from './ImportantLines';

const Home = () => {
    return (
        <div>
           
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
          <ImportantLines/>
        
        </div>
    );
};

export default Home;