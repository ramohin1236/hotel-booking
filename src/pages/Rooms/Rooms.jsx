import Carousell from "./Carousell";
import Container from './../../components/Shared/Container';
import { useEffect } from "react";
import { useState } from "react";
import RoomsCart from "./RoomsCart";
import Categories from "./Categories";
import { useSearchParams } from "react-router-dom";
import { RiPhoneFindLine } from "react-icons/ri";

const Rooms = () => {
    const [cart,setCart]=useState([])
  const [params, setParams]=useSearchParams();
  
  const category =params.get('category');
  
        useEffect(()=>{
            fetch('/public/hoteldata.json')
            .then(res=>res.json())
            .then(data=>{
                if(category){
                    const filtered =data.filter(room=>room.category===category)
                    setCart(filtered)
                }
                else setCart(data)
            })
        },[category])
    return (
        <div>
           <Carousell/>
          <Container>
           <Categories/>

             {
                cart && cart.length >0 ? <div className=" pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:-ml-12">
                {
                  cart?.map(item=><RoomsCart key={item.id} item={item}/>)
                }
            </div> : 
            <div className="text-center my-20 ">
            
                <RiPhoneFindLine className="text-[300px] text-blue-700 ml-10 md:ml-44 lg:ml-80 xl:ml-[450px] 
            
                "/>
           
                <p className="text-6xl font-bold text-slate-600">No Rooms Here...</p>
            </div>
             }
             
          </Container>
        </div>
    );
};

export default Rooms;