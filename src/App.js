import Introduction from "./Pages/Introduction";
import styled from "styled-components";
import SIgnIn from "./Pages/SIgnIn";
import Input from './components/Input';
import UserDetails from "./Pages/UserDetails";
import CheckBox from "./components/CheckBox";
import SmallInput from "./components/SmallInput";
import GetStarted from "./Pages/GetStarted";
import Card from "./components/Card";
import Community from "./Pages/Community";
import Events from "./Pages/Events";
import PickUpEvents from "./Pages/PickUpEvents";
import EventCard from "./components/EventCard";
import NavMenu from "./Pages/NavMenu";
import Feed from "./Pages/Feed";
import TopNav from "./components/TopNav";
import FeedComponent from "./components/FeedComponent";
import EventList from "./Pages/EventList";
import Post from "./Pages/Post";
import BottomNav from "./components/BottomNav";
import Request from "./components/Request";
import WeightCard from "./components/WeightCard";
import Points from "./Pages/Points";
import RecordWeight from "./Pages/RecordWeight";
import PendingRequest from "./Pages/PendingRequest";
import SchedulePickupCard from "./components/SchedulePickupCard";
import EmergencyPickup from "./components/EmergencyPickup";
import VoucherCard from "./components/VoucherCard";
import UpComingPickup from "./Pages/UpComingPickup";


function App() {
  return (
    <HomePage>
      <UpComingPickup />
    </HomePage>
  );
}

const HomePage = styled.div`
  background-color: #fcfffb;
`;

export default App;
