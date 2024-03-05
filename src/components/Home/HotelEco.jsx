/* eslint-disable react/no-unescaped-entities */

import { FaWalking } from 'react-icons/fa';
import Container from './../Shared/Container';
import HotelEcoCart from './HotelEcoCart';
import { PiCookingPotFill } from "react-icons/pi";


const HotelEco = () => {
    return (
        <Container >
            <p className="text-4xl text-blue-700 mb-8 font-bold">
            Hotel surroundings
         </p>
          <div className='mt-24'>
          <div className='flex gap-3 items-center'>
            
            <FaWalking  className='text-2xl'/>
                <p className='text-2xl text-slate-700 font-semibold'>What's Nearby</p>
            </div>

           <div className='grid grid-cols-2'>
          
           <div className='mt-6 border-2 flex  '>
           
           
               
         <div >
               <div >
               <HotelEcoCart title={"Police Lines Ground"} sub={"2km"}/>
                 
                 <HotelEcoCart title={"Coxs Bazar Ban Samprasaran Kendra"} sub={"2.6 km"}/>
                 <HotelEcoCart title={"College Ground"} sub={"4.7 km"}/>
                 <HotelEcoCart title={"Cox Bazar Botanical Garden"} sub={"14 km"}/>
                 <HotelEcoCart title={"Nilima"} sub={"14 km"}/>
               </div>

              
        </div>
            </div>
            <div className='' >
                 <div className='flex gap-3 items-center'>
                 <PiCookingPotFill className='text-2xl'/>
               <p className='text-2xl text-slate-700 font-semibold'>Restaurants & cafes</p>
                 </div>
                
                    
               </div>
            
           </div>

           <div className='flex'>
           <div className='flex-1'>
                 <div className='flex gap-3 items-center'>
                 <PiCookingPotFill className='text-2xl'/>
               <p className='text-2xl text-slate-700 font-semibold'>Restaurants & cafes</p>
                 </div>
                
                    
               </div>
            <div className='flex-1'>
                 <div className='flex gap-3 items-center'>
                 <PiCookingPotFill className='text-2xl'/>
               <p className='text-2xl text-slate-700 font-semibold'>Restaurants & cafes</p>
                 </div>
                
                    
               </div>
           </div>

          </div>
        </Container>
    );

};

export default HotelEco;