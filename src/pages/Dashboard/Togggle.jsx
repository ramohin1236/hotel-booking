/* eslint-disable react/prop-types */

const Togggle = ({toggleHandler}) => {

    return (
        <>
            <label
            htmlFor="Toggle3"
            className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800"
            >
          <input 
          type="checkbox" 
          id="Toggle3"
          onChange={toggleHandler}
          className="hidden peer"
          />

          <span 
          
          className="px-4 py-1 rounded-l-md bg-blue-400 peer-checked:bg-gray-300">
            Guest
          </span>

          <span className="px-4 py-1 rounded-r-md bg-blue-300 peer-checked:bg-blue-400">
            Host
          </span>

            </label>
        </>
    );
};

export default Togggle;