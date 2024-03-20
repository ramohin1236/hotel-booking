/* eslint-disable react/prop-types */

import { DateRange } from "react-date-range";

const AddroomForm = ({ handleSubmit,dates, handleDates}) => {
    return (
        <div className="w-full min-h-[calc(100vh-40px)] flex flex-col ">
            <form onSubmit={ handleSubmit}>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
     
        <div className="space-y-1 text-sm md:flex  gap-14">
          <div className="flex-1">
          <label htmlFor="location" className="block font-bold text-gray-600">
                Location
            </label>
        <input name='location' type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          </div>
          <div className="flex-1">
          <label htmlFor="location" className="block font-bold text-gray-600">
                Title
            </label>
        <input name='title' type="text" placeholder="Type here" className="input font-bold input-bordered input-primary w-full max-w-xs" />
          </div>
        </div>

 <div className="space-y-1 text-sm">

 <label htmlFor="location" className="block text-gray-600">
                Category
            </label>
 <select name='category' className="select select-primary w-full max-w-xs">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>
 </div>

     
               </div>


        <div className="mt-12 ">
            <label htmlFor="" className="font-bold">
                Upload Image
            </label>
        <input name="image" type="file" className="file-input file-input-bordered file-input-primary w-full h-20" />
        </div>


{/* date */}
     <div className="mt-12 md:flex ">
        <div className="mr-12 ">
            <p className="text-xl font-bold">Select Date</p>
            <DateRange
             ranges={[dates]}
             onChange={handleDates}
            minDate={new Date()}
             showDateDisplay={false}
            />
        </div>


<div>
    {/* hfsd */}
    <div className="md:flex gap-10">
      <div>
      <label htmlFor="location" className="block font-bold text-gray-600">
                Guest
            </label>
        <input name='guest' type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      </div>
   <div>
   <label htmlFor="location" className="block font-bold text-gray-600">
                Price
            </label>
        <input name='price' type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
   </div>

  
        </div>
         {/* hfsd */}
   <div className="md:flex gap-10 mt-12">
      <div>
      <label htmlFor="location" className="block font-bold text-gray-600">
                Bathrooms
            </label>
        <input name='bathrooms' type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      </div>
   <div>
   <label htmlFor="location" className="block font-bold text-gray-600">
               Bedrooms
            </label>
        <input name='bedrooms' type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
   </div>
        </div>
       <p className="font-bold mt-6">Description</p>
        <textarea name="des"  className="textarea textarea-primary w-full h-44 " placeholder="Bio"></textarea>
</div>

     </div>
     
     <button type="submit" className="w-full mt-6 mb-24 btn btn-active bg-blue-600 hover:bg-blue-800 text-white">Save & Upload</button>
            </form>
        </div>
    );
};

export default AddroomForm;