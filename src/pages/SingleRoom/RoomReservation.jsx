/* eslint-disable react/prop-types */
import Calender from "./Calender";

const RoomReservation = ({room}) => {
    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
             <div className="text-2xl font-semibold"> ${room?.price}</div>
             <div className="text-neutral-600 font-medium">night</div>
            </div>
            <Calender/>
        </div>
    );
};

export default RoomReservation;