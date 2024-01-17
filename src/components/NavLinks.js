import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const headerStyle = {
    fontFamily: 'Times, Times New Roman, serif',
    fontSize: '28px',
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
    const history = useHistory();
    const [expanded, setExpanded] = useState(false);

    const handleNavLinkClick = (path) => {
        history.push(path);
        setExpanded(false);
    };

    return (
        <Navbar expand="lg" className="bg-body" expanded={expanded}>
            <Container fluid>
                <Navbar.Brand style={headerStyle} as={NavLink} to="/">
                    Nadine Hoopingarner
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <StyledNavLink to="/" exact onClick={() => handleNavLinkClick("/")}>
                            About Me
                        </StyledNavLink>
                        <StyledNavLink to="/Interconnect" onClick={() => handleNavLinkClick("/Interconnect")}>
                            Interconnect
                        </StyledNavLink>
                        <StyledNavLink to="/Intraconnect" onClick={() => handleNavLinkClick("/Intraconnect")}>
                            Intraconnect
                        </StyledNavLink>
                        <StyledNavLink to="/ContactUs" onClick={() => handleNavLinkClick("/ContactUs")}>
                            Contact
                        </StyledNavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavLinks;
