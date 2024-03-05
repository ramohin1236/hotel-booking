/* eslint-disable react/prop-types */


const HotelEcoCart = ({title, sub}) => {
    return (
        <div className="grid  max-sm:flex max-md:grid-cols-2  lg:grid-cols-4 ">
            <div className='m-8 flex justify-between'>
                    <p className=" text-slate-600">{title}</p>
                    <p className="max-sm:ml-12 text-slate-600">{sub}</p>
                 </div>
        </div>
    );
};

export default HotelEcoCart;