import React from "react";
import styled from "styled-components";

const Header = ({title, Dashboard}) => {
  return (
    <Container>
      <Wrapper>
        <p>{title ? title : null}</p>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: darkblue;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 100%;

  p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;
