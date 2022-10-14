import MainImg from "../styles/assets/img/mainImg.png";
import styled from "styled-components";
import MonthRank from "../component/main/MonthRank";

const Main = () => {
  return (
    <>
      <ImgWrap>
        <img src={MainImg} />
      </ImgWrap>
      <MonthRank/>
    </>
  );
};
export default Main;

const ImgWrap = styled.div`
  padding: 10px 0;
  img {
    width: 100%;
  }
`;
