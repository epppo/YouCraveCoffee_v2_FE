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
const Wrap = styled.div``;
