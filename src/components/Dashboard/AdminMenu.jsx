import { TbBrandBooking } from "react-icons/tb";
import MenuItem from "../../pages/Dashboard/MenuItem";

const AdminMenu = () => {
    return (
        <>
        <MenuItem
               label={"Manage Users"}
               icon={TbBrandBooking}
               address={'m-bookings'}
               />
   </>
    );
};

export default AdminMenu;