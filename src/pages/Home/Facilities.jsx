import HomeIcons from "../../components/Home/HomeIcons";
import Container from "../../components/Shared/Container";
import { FaSmokingBan, FaWifi } from "react-icons/fa";
import { MdAirportShuttle, MdOutlineChairAlt, MdOutlineCleaningServices } from "react-icons/md";
import { FaSquareParking } from "react-icons/fa6"
import { MdFoodBank } from "react-icons/md";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";


const Facilities = () => {
    return (
        <Container>
            

            <p className="text-2xl font-semibold text-slate-700 mt-6">Most Popular Facilities</p>

            <div className="grid grid-cols-6 gap-10  max-sm:grid-cols-2    max-md:grid-cols-4">
                <HomeIcons title={"Free wifi"} icon={FaWifi}/>

                <HomeIcons title={"Airport shuttle"} icon={MdAirportShuttle}/>

                <HomeIcons title={"Free parking"} icon={FaSquareParking}/>

                <HomeIcons title={"Restaurant"} icon={MdFoodBank}/>

                <HomeIcons title={"Family Room"} icon={MdOutlineFamilyRestroom }/>

                <HomeIcons title={"Room Sevice"} icon={MdOutlineCleaningServices }/>
                <HomeIcons title={"Non-smoking rooms"} icon={FaSmokingBan }/>

                <HomeIcons title={"24-hour front desk"} icon={MdOutlineChairAlt }/>

                <HomeIcons title={"Tea/coffee maker in all rooms"} icon={SiCoffeescript }/>

                <HomeIcons title={"Breakfast"} icon={GiSlicedBread }/>
            </div>

        </Container>
    );
};

export default Facilities;