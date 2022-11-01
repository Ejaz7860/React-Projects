import { Heading, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import '../scss/Header.scss';


const Header = () => {
  return (
    <>
      <div className="Header">
        <Heading
          padding={{ sm: "0 2rem" }}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Camera
        </Heading>
        <HStack>
          <NavLink className="nav" to={"/camera"}>
            Home
          </NavLink>
          <NavLink className="nav" to={"/camera/product"}>
            Product
          </NavLink>
          <NavLink className="nav" to={"/camera/about"}>
            About
          </NavLink>
          <NavLink className="nav" to={"/camera/contact"}>
            Contact
          </NavLink>
        </HStack>
      </div>
    </>
  );
};

export default Header;
