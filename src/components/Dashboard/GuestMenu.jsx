import { TbBrandBooking } from "react-icons/tb";
import MenuItem from "../../pages/Dashboard/MenuItem";

const GuestMenu = () => {
    return (
        <>
             <MenuItem
                    label={"Manage Bookings"}
                    icon={TbBrandBooking}
                    address={'m-bookings'}
                    />
        </>
    );
};

export default GuestMenu;