import { FaGoogle } from 'react-icons/fa';
import Reg from '../../components/Reg/Reg';
import useAuth from '../../components/hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { ImSpinner9 } from 'react-icons/im';
// import { useEffect } from 'react';

const Login = () => {
    const {loading, signIn, signInGoogle,} =useAuth()
 const navigate =useNavigate()
   const location =useLocation()
const from = location?.state?.from?.pathname || '/';

// useEffect(()=>{
    
// },[])



const handleSignUp =async(event)=>{
     event.preventDefault()
     const form = event.target;
     const email= form.email.value;
     const password= form.password.value;
     console.log({email,password});
    
     
     
     try{
       

        // login registration
        const result = await signIn(email,password);



        // get token form user
        await getToken(result?.user?.email)
        navigate(from, {replace: true})
        toast.success('Login Successfully!')
       
     }catch(err){
         toast.error(err?.message)
     }
    
}
 
 const handleGoogle =async()=>{
        try{
           

            // user registration with google
            const result = await signInGoogle();

        
            
    // save user daata in database
            const dbResponse = await saveUser(result?.user)
            console.log(dbResponse);

            // get token form user
            await getToken(result?.user?.email)
            navigate("/rooms")
            toast.success('User Create Successfully!')
           
         }catch(err){
             toast.error(err?.message)
         }
    }

    return (
        <div>
        <div>
            <div style={{backgroundImage: "url('../../../src/assets/login.jpg')"}} className="hero min-h-screen bg-base-200">
  <div className="hero-content    ">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100 p-6">
    <h1 className="text-5xl text-center mt-8 font-bold ">Login now!</h1>
      <form onSubmit={handleSignUp} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label flex">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <label htmlFor="my_modal_6" className='cursor-pointer' >Registration</label>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-800 hover:bg-blue-900 text-white">Login</button>
        </div>
      </form>
      <hr />
      <button onClick={handleGoogle} className="btn btn-outline">
      {loading ?  <ImSpinner9 className="animate-spin m-auto"/> :  <FaGoogle/> }
       
        </button>
    </div>
  </div>
</div>
        </div>
       {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
        <Reg/>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;