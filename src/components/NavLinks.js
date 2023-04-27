import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
    const linkStyles = {
        display: "inline-block",
        width: "fit-content",
        padding: "10px",
        margin: "0 0px 6px",
        background: "green",
        textDecoration: "none",
        color: "white",
        lineHeight: 1.5,
        fontSize: "18px",
      };
      
    return (
        <div className="navLinksComponentDiv">
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkgreen"}}>Home</NavLink>
            <NavLink to="/Interconnect" exact style={linkStyles} activeStyle={{background: "darkgreen"}}>Interconnect</NavLink>
            <NavLink to="/Intraconnect" exact style={linkStyles} activeStyle={{background: "darkgreen"}}>Intraconnect</NavLink>
            <NavLink to="/resume" exact style={linkStyles} activeStyle={{background: "darkgreen"}}>Resume</NavLink>
        </div>
    )
}