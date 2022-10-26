import { Button, HStack, Popover } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      position={"sticky"}
      zIndex={10}
      top={0}
      p={"4"}
      shadow={"base"}
      bgColor={"purple.900"}
    >
      <Button
        size="md"
        fontSize={"1.4rem"}
        color={"white"}
        variant="unstyled"
        // css={{
        //   "&:hover": {
        //     transform: "scale(1.1)",
        //   },
        // }}
      >
        <Link to={"/crypto"}>Home</Link>
      </Button>

      <Button fontSize={"1.4rem"} variant={"unstyled"} color={"white"}>
        <Link to={"/crypto/exchange"}>Exchange</Link>
      </Button>
      <Button fontSize={"1.4rem"} variant={"unstyled"} color={"white"}>
        <Link to={"/crypto/coins"}>Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
