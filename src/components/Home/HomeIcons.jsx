/* eslint-disable react/prop-types */


const HomeIcons = ({icon: Icon, title}) => {

    return (
        <div className="mt-6">
            <div className="flex  gap-2 items-center">
            <p> <Icon className="text-green-600 text-xl"/></p>
            <p className="text-slate-500"> {title}</p>
            </div>
        </div>
    );
};

export default HomeIcons;