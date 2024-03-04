import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import sad from '../../assets/sad.jpg'
import './ErrorPage.css';
const ErrorPage = () => {

    const navigate =useNavigate()

   const handleBack= ()=>{
    navigate(-1)
   }
    return (
        <div>
            
            <img  className="w-96 sad" src={sad} alt="" />
            <p className="text-5xl font-bold text-center">Routes does not match </p>
           

           <div className="flex gap-52 mt-6 justify-center">
           <button className="flex items-center text-xl font-medium">
                <IoMdArrowRoundBack 
                className="text-6xl text-blue-600"
                onClick={()=>handleBack()}/>
                 Go Back
            </button>
            <Link to='/'>
            <button className="btn bg-blue-400 hover:bg-blue-500 text-black">Home</button>
            
            </Link>

           </div>
        </div>
    );
};

export default ErrorPage;