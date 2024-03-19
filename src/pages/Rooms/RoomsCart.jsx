/* eslint-disable react/prop-types */

import Container from "../../components/Shared/Container";
import { Link } from 'react-router-dom';



const RoomsCart = ({item}) => {
    console.log(item);
    const {_id,image,title,location,price}=item
   
    return (
        <Container>
            <Link to={`/rooms/${_id}`} className="card w-full md:w-[300px] xl:w-[400px] bg-base-100  h-full group">
  <figure><img  className="w-full h-96 group-hover:scale-110" src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold text-blue-700">
     {title}
   
    </h2>
    <p className="font-semibold text-xl">{location}</p>
   
    <p className="font-bold text-2xl">${price} /night</p>
   
  </div>
</Link>
          
        </Container>
    );
};

export default RoomsCart;