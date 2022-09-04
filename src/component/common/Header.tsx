import styled from "styled-components";
import {Coffee} from "../../styles/assets"

const Header = () => {
  return (
    <Wrap>
      <Logo>You Crave Coffee <Coffee/></Logo>
      <ButtonBox>
        <div>Login</div>
        <div>Join</div>
      </ButtonBox>
    </Wrap>
  );
};
export default Header;

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 400px;
  height: 50px;
  border-bottom: 1px solid rosybrown;
  font-family: "Amatic SC", cursive;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  color: rosybrown;
`;

const Logo = styled.div`
  font-size: 2.5rem;
`;

const ButtonBox = styled.div`
display: flex;
gap: 20%;
font-size: 1.5rem;
`;
