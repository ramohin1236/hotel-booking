

import img1 from '../../assets/outdoor-patio.jpg'
import img2 from '../../assets/sayeman-beach-resort.jpg'
import img3 from '../../assets/umbrella-pool.jpg'
import './carousel.css';


const Carousell = () => {
    return (
        <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full img opacity-55"  />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
            
    </div>
    <div className='absolute top-44 ml-24'>
    <p className='text-3xl font-bold text-blue-700'>Add More Functionality ...</p>
    </div>
    <div>
   
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full img opacity-55  " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
              
    </div>
    <div className='absolute top-44 ml-24'>
    <p className='text-3xl font-bold text-blue-700'>Add More Functionality ...</p>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3}className="w-full img opacity-55" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-56">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
     
    </div>
    <div className='absolute top-44 ml-24'>
    <p className='text-3xl font-bold text-blue-700'>Add More Functionality ...</p>
    </div>
  </div> 

</div>
    );
};

export default Carousell;