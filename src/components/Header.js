import React from "react";

export default function Header({ title }) {
    return (
        <div className="headerComponentDiv">
            <h1 className="pageHeaders">{title}</h1>
        </div>
    )
}