import React from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";

export default function Home() {

    const homeTitle="Nadine Hoopingarner"
    return (
        <div className="homeComponentDiv">
            <NavLinks />
            <Header title={homeTitle} />
        </div>
    )
}