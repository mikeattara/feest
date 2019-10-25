import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Logo = styled(NavLink)`
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <Container>
      <Logo to="/">Feest</Logo>
      <div>
        <NavLink to="/About"></NavLink>
      </div>
    </Container>
  );
};

export default Header;
