import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Interconnect() {

    const interconnectTitle = "Interconnect"

    return (
        <div className="interconnectDiv">
            <Header title={interconnectTitle}/>
            <Footer />
        </div>
    )
}