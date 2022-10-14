import styled from "styled-components";


const MonthRank = () =>{
  return (
    <Wrap>
      <InnerWrap>
        <div>
          <span>Monthly <br/> 🌟 Rank</span>
        </div>
      </InnerWrap>
    </Wrap>)
}
export default MonthRank;

const Wrap = styled.div`
background: #F3F3F3;
height: 200px;
border-top: 1px solid rosybrown;
border-bottom: 1px solid rosybrown;
display: flex;
align-items: center;
`;

const InnerWrap = styled.div`

div{
  text-align: right;
  margin: 20px;

}
span{
  font-size: 3rem;  
  color: rosybrown;
  font-family: "Amatic SC", cursive;
}
`;