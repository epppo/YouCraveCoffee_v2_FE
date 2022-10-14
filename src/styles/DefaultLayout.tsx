import styled from "styled-components";

interface Props {
  children: React.ReactNode
}

const DefaultLayout: React.FC<Props> = (props: Props) =>{
return (
  <Wrap>
    {props.children}
  </Wrap>)
}
export default DefaultLayout;

const Wrap = styled.div`
max-width: 1920px;
min-width: 1000px;
max-height: 1080px;
margin: 0 30px;
`;
