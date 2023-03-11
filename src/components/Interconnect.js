import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Interconnect() {

    const interconnectTitle = "Interconnect"
    const testimonialsTitle = "Testimonials"

    return (
        <div className="interconnectDiv">
            <Header title={interconnectTitle}/>
            <Header title={testimonialsTitle}/>
            <p>Nadine has been an asset to the team since we hired her. She is highly self motivated and always looking to grow and learn more. Nadine constantly asks what more she can be doing and is eager for new training. Nadine is innovative and has taken many high level projects into her own hands without being asked to do so. These include building a sales page and managing lead funnels in Kartra as well as setting up and managing Meta for 6 separate accounts. Nadine is constantly bringing new ideas to the table to both improve the business as well as the client experience. She is an invaluable asset to the team, and we would be lost without her.</p>
            <Footer />
        </div>
    )
}