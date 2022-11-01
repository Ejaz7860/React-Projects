import React from "react";
import { Container, Text } from "@chakra-ui/react";
const sidebar = () => {
  return (
    <>
      <Container
        mt={4}
        ml={4}
        bgColor={"#f8fffb"}
        w={52}
        h={400}
        mb={4}
        rounded={3}
        shadow={"2xl"}
        position={"fixed"}
      >
        <Text fontSize={'1.1rem'} letterSpacing={1} textAlign={'center'} fontWeight={'bold'}>Filter</Text>
      </Container>
    </>
  );
};

export default sidebar;
