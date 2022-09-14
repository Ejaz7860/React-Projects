import styled from "styled-components"

const Announcement = () => {
  return (
    <Container>
        <p>Super Deal! Free Shipping on Order Over Rs.9999</p>
    </Container>
  )
}

export default Announcement;


const Container = styled.div`
 height: 30px;
 background-color: teal;
 color: white;
 font-weight: 500;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 14px;
`;
