import videohotel from '../../assets/hotel.mp4';
import "./Home.css";
const Home = () => {
    return (
        <div>
           
           <div className="">
           <video   className=" " src={videohotel} autoPlay loop muted/>
           <div style={{ backgroundColor: 'rgba(0, 0, 255, 0.6)' }} className='absolute  '>

           </div>
           </div>
            <div className='content'>
                <p className='text-3xl font-bold '>This is my website</p>
                <p className='text-xl '>Room is available</p>
                
            </div>
            
        </div>
    );
};

export default Home;