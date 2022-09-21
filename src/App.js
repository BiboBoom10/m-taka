import Introduction from "./Pages/Introduction";
import styled from "styled-components";

function App() {
  return (
    <HomePage>
      <Introduction />
      
    </HomePage>
  );
}

const HomePage = styled.div`
  background-color: #fcfffb;
`;

export default App;
