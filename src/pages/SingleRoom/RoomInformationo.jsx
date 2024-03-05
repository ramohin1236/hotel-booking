/* eslint-disable react/prop-types */
import { LiaHandPointRightSolid } from "react-icons/lia";
import HomeIcons from "../../components/Home/HomeIcons";
import Container from "../../components/Shared/Container";


const RoomInformationo = ({room}) => {
    return (
        <Container>
            <p className="text-2xl font-bold mt-16">Room Size: {room.size}</p>

            <p className="text-2xl font-semibold text-slate-700 mt-10">Room facilities</p>

          <div className="flex justify-around gap-8 max-sm:flex-col">
          <div className="text-xl">
                 <HomeIcons title={"Desk"} icon={LiaHandPointRightSolid}/> 
                 <HomeIcons title={"Flat-screen TV"} icon={LiaHandPointRightSolid}/> 
                 <HomeIcons title={"Tea/Coffee maker"} icon={LiaHandPointRightSolid}/> 
                 <HomeIcons title={"Refrigerator"} icon={LiaHandPointRightSolid}/> 
                 <HomeIcons title={"Tile/marble floor"} icon={LiaHandPointRightSolid}/> 
                 <HomeIcons title={"nterconnected room(s) available"} icon={LiaHandPointRightSolid}/> 
           </div>
           <div>
           <HomeIcons title={"Entire unit wheelchair accessible"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Upper floors accessible by elevator"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Satellite channels"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Air conditioning"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Minibar"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Clothes rack"} icon={LiaHandPointRightSolid}/> 
           </div>
           <div>
           <HomeIcons title={"Entire unit wheelchair accessible"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Upper floors accessible by elevator"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Satellite channels"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Air conditioning"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Minibar"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Clothes rack"} icon={LiaHandPointRightSolid}/> 
           </div>
          </div>

          <p className="text-2xl font-semibold text-slate-700 mt-10">View</p>
          <div className="flex justify-around gap-8 max-sm:flex-col">
             <div>
             <HomeIcons title={"Sea view"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Mountain view"} icon={LiaHandPointRightSolid}/> 
           
             </div>
             <div>
             <HomeIcons title={"City view"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Moon view"} icon={LiaHandPointRightSolid}/>
             </div>
             <div>
             <HomeIcons title={"Beach view"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Nice "} icon={LiaHandPointRightSolid}/>
             </div>
          </div>


          <p className="text-2xl font-semibold text-slate-700 mt-10">In your private bathroom</p>
          <div className="flex justify-around gap-8 max-sm:flex-col">
             <div>
             <HomeIcons title={"Bath"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Free toiletries"} icon={LiaHandPointRightSolid}/> 
           
             </div>
             <div>
             <HomeIcons title={"Shower"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Bathrobe"} icon={LiaHandPointRightSolid}/>
             </div>
             <div>
             <HomeIcons title={"Toilet"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Slippers"} icon={LiaHandPointRightSolid}/>
             </div>
             <div>
             <HomeIcons title={"Hairdryer"} icon={LiaHandPointRightSolid}/> 
           <HomeIcons title={"Toilet paper"} icon={LiaHandPointRightSolid}/>
             </div>
          </div>
          <p className="text-xl font-bold text-slate-700 mt-8 mb-16">Smoking: <span className="">No Smoking</span></p>
        </Container>
    );
};

export default RoomInformationo;