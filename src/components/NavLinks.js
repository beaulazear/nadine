import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
    const linkStyles = {
        display: "inline-block",
        width: "fit-content",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
      
    return (
        <div className="navLinksComponentDiv">
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Home</NavLink>
            <NavLink to="/testimonials" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Testimonials</NavLink>
            <NavLink to="/resume" exact style={linkStyles} activeStyle={{background: "darkblue"}}>Resume</NavLink>
        </div>
    )
}