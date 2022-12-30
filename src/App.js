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


function App() {
  return (
    <HomePage>
      <Feed />
    </HomePage>
  );
}

const HomePage = styled.div`
  background-color: #fcfffb;
`;

export default App;
