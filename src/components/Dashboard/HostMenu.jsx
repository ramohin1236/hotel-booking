import { BsDoorOpenFill } from "react-icons/bs";
import MenuItem from "../../pages/Dashboard/MenuItem";
import { FaHome } from "react-icons/fa";

const HostMenu = () => {
    return (
        <>
            <MenuItem
                    label={"Add Room"}
                    icon={BsDoorOpenFill}
                    address={'add-room'}
                    />
                    <MenuItem
                    label={"My Listing"}
                    icon={FaHome}
                    address={'listing'}
                    />
        </>
    );
};

export default HostMenu;