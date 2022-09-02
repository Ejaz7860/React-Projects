import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
const Slider = () => {
  return (
    <>
      <Container>
        <Arrow direction="left" >
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper>
            <ImgC>
            <img src={""} alt="poc" />
            </ImgC>
        </Wrapper>
        <Arrow direction="right" >
          <ArrowRightOutlinedIcon />
        </Arrow>
      </Container>
    </>
  );
};
export default Slider;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction === "left" && "10px"};
  right: ${props=> props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
`;


const Wrapper = styled.div`
 height: 100%;
`;

const SlideC =  styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const ImgC = styled.div`
flex: 1;
`;
const Info = styled.div``;
