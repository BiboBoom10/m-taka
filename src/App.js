import Introduction from "./Pages/Introduction";
import styled from "styled-components";
import SIgnIn from "./Pages/SIgnIn";
import Input from './components/Input';
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <HomePage>
     <UserDetails />
    </HomePage>
  );
}

const HomePage = styled.div`
  background-color: #fcfffb;
`;

export default App;
