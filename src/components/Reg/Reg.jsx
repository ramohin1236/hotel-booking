
import { imageUpload } from "../../api/utils";
import useAuth from "../hooks/useAuth";
import { getToken, saveUser } from "../../api/auth";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";




const Reg = () => {
   
    const {createUser,updateUserProfile,loading}
     =useAuth()

    const navigate =useNavigate()
    const handleSignUp =async(event)=>{
         event.preventDefault()
         const form = event.target;
         const name=form.name.value;
         const email=form.email.value;
         const password=form.password.value;
         const image=form.image.files[0]
        
         
         
         try{
            // upload image
            const imageData = await imageUpload(image);

            // user registration
            const result = await createUser(email,password);

            // save userName & photo
            await updateUserProfile(name, imageData?.data?.display_url) 
            
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
        <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Now!</h1>
        </div>
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form
          onSubmit={handleSignUp}
          className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              name="name"
              type="text" placeholder="Your Name" className="input input-bordered" required />
            
            </div>
            <label className="form-control max-w-xs">
  <div className="label">
    <span className="label-text">Choose A Photo</span>
  
  </div>
  <input 
  name="image"
  accept="image/*" 
  type="file" 
  id="image"
  className="file-input file-input-bordered w-full max-w-xs" />

</label>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
              type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
              type="password" placeholder="password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-800 hover:bg-blue-900 text-white">
                {loading ?  <ImSpinner9 className="animate-spin m-auto"/> : "Registration"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Reg;