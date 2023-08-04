import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"

export default function NavLinks() {

    return (
        <div className="navigation">
            <NavLink to="/" exact className="navButtons" activeStyle={{background: "darkgreen"}}>Home</NavLink>
            <NavLink to="/Interconnect" exact className="navButtons" activeStyle={{background: "darkgreen"}}>Interconnect</NavLink>
            <NavLink to="/Intraconnect" exact className="navButtons" activeStyle={{background: "darkgreen"}}>Intraconnect</NavLink>
            <NavLink to="/resume" exact className="navButtons" activeStyle={{background: "darkgreen"}}>Resume</NavLink>
        </div>
    )
}