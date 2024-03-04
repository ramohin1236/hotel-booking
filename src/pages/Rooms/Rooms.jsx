import Carousell from "./Carousell";
import Container from './../../components/Shared/Container';
import { useEffect } from "react";
import { useState } from "react";
import RoomsCart from "./RoomsCart";
import Categories from "./Categories";


const Rooms = () => {
    const [cart,setCart]=useState([])

        useEffect(()=>{
            fetch('/public/hoteldata.json')
            .then(res=>res.json())
            .then(data=>setCart(data))
        },[])
    return (
        <div>
           <Carousell/>
          <Container>
           <Categories/>

              {/* <p className="text-3xl font-bold">Rooms are here...{cart.length}</p> */}
              <div className=" pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:-ml-12">
                  {
                    cart?.map(item=><RoomsCart key={item.id} item={item}/>)
                  }
              </div>
          </Container>
        </div>
    );
};

export default Rooms;