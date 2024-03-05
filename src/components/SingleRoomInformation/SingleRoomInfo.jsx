/* eslint-disable react/prop-types */
import Container from './../Shared/Container';




const SingleRoomInfo = ({room}) => {
    console.log(room);
    return (
        <Container>
           <div className='mb-12'>
           <p className='text-xl text-slate-700'>{room.description}</p>
           </div>
            
            <div>
                <p className='text-4xl text-blue-700 font-bold'>Availability</p>
                <div className="overflow-x-auto">
  <table className="table text-xl">
    {/* head */}
    <thead>
      <tr>
        
   
        <th>Availability</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td className='font-semibold text-slate-700'>Guest</td>
      
        <td>{room.guest}</td>
      </tr>
      {/* row 2 */}
      <tr>
       
        <td className='font-semibold text-slate-700'>Bed-rooms</td>
        <td>{room.bedrooms}</td>
      </tr>
      {/* row 3 */}
      <tr>
     
        <td className='font-semibold text-slate-700'>Bathrooms</td>
        <td>{room.bathrooms}</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>

            
        </Container>
    );
};

export default SingleRoomInfo;