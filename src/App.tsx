import Router from "./Router";
import Header from "./component/common/Header";
import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <Header />
      <Router />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
max-width: 1920px;
min-width: 400px;
max-height: 1080px;
margin: 0 30px;
`;
