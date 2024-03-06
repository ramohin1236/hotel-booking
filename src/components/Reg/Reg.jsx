


const Reg = () => {
    const handleSignUp =async(event)=>{
         event.preventDefault()
         const form = event.target;
         const name=form.name.value;
         const email=form.email.value;
         const password=form.password.value;
         const image=form.image.files
         console.log({name,email,password,image});
         console.log(image);
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
              <button className="btn bg-blue-800 hover:bg-blue-900 text-white">Registration</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Reg;