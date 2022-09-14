import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            {/* <input style={{border:"none"}} type="text" /> search */}
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Center>
            <NavLink to={"/"} >
              {" "}
              <Logo>S-Cart.</Logo>
            </NavLink>
          </Center>
        </Center>
        <Right>
          <NavLink
            style={{ textDecoration: "none", color: "#111" }}
            to={"/register"}
            className={({isActive})=> "nav-link" + (isActive ? "activated" : "") }
          >
            <MenuItem>Register</MenuItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "#111" }}
            to={"/login"}
          >
            <MenuItem>Login</MenuItem>
          </NavLink>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>{" "}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};


// background: aliceblue;
// padding: 6px 19px;
// border-radius: 4px;
const Container = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 60px;
  width: 100% !important;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  padding: 5px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 14px;
`;

const MenuItem = styled.div`
  font-weight: 14px;
  margin-left: 25px;
`;

export default Navbar;
