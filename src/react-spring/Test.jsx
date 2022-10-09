import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

const Test = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <>
      <Container>
        <div className="box">
          <animated.h1 style={props}>Hello World</animated.h1>
        </div>
      </Container>
    </>
  );
};

export default Test;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    width: 400px;
    height: 400px;
    width: 400px;
    height: 400px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid darkblue;

    /* h1{
        text-transform: uppercase;
        color: darkblue;
    } */
  }
`;
