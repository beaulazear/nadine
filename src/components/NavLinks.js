import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const headerStyle = {
    fontFamily: 'Times, Times New Roman, serif',
    fontSize: '22px',
}

const StyledNavLink = styled(NavLink)`
  color: #696969;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  padding: 10px;

  &:hover {
    color: #181818;
  }

  &.active {
    color: #181818;
    font-weight: bold;
  }
`;

function NavLinks() {
    return (
        <Navbar expand="lg" className="bg-body">
            <Container fluid>
                <Navbar.Brand style={headerStyle} as={NavLink} to="/">
                    Nadine Hoopingarner
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledNavLink to="/" exact>
                            About Me
                        </StyledNavLink>
                        <StyledNavLink to="/Interconnect">
                            Interconnect
                        </StyledNavLink>
                        <StyledNavLink to="/Intraconnect">
                            Intraconnect
                        </StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavLinks;
