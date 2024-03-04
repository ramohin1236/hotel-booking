import videohotel from '../../assets/hotel.mp4';
import Navbar from '../Navbar/Navbar';
import "./Home.css";
const Home = () => {
    return (
        <div>
            
            <video src={videohotel} autoPlay loop muted/>
            <div className='content'>
                <p className='text-3xl font-bold '>This is my website</p>
                <p className='text-xl '>Room is available</p>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default Home;