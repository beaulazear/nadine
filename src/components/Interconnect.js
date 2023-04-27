import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Offering from "./Offering";
import { marketingOfferingsData } from "../data/marketingOfferings";

export default function Interconnect() {

    const interconnectTitle = "Interconnect"
    const testimonialsTitle = "Testimonials"

    return (
        <div className="interconnectDiv">
            <Header title={interconnectTitle} />
            <ul className="offeringsUl">
            <p className="interconnectP">It is my passion to bridge the space between marketing and your audience. To build campaigns that focus on organic growth, feel more authentic to your values, and release the pressure off you, by me creating/setting up your accounts, making content, scheduling, and engaging with your audience.</p>
                {marketingOfferingsData.map((offer) => (
                    <Offering key={offer.id} data={offer} />
                ))}
            </ul>
            <Header title={testimonialsTitle} />
            <div className="testimonials">
                <h3>Lacey Pettibone, <u>Pocket Blonde Fitness LLC</u></h3>
                <p>Nadine has been an asset to the team since we hired her. She is highly self motivated and always looking to grow and learn more. Nadine constantly asks what more she can be doing and is eager for new training. Nadine is innovative and has taken many high level projects into her own hands without being asked to do so. These include building a sales page and managing lead funnels in Kartra as well as setting up and managing Meta for 6 separate accounts. Nadine is constantly bringing new ideas to the table to both improve the business as well as the client experience. She is an invaluable asset to the team, and we would be lost without her.</p>
                <p>Aside from constantly taking on new projects her weekly duties include, but aren't limited to:</p>
                <ul>
                    <li>Managing our content calendar including scheduling weekly content to fit the aesthetics of our page and looking through old content to find opportunities to repurpose.</li>
                    <li>Created and manages our content carousel including post links content buckets, and repurposing
                    </li>
                    <li>Researches our competitors to come up with new content ideas </li>
                    <li>Manages our Facebook page including welcoming new members, finding leads, and creating some of the content </li>
                    <li>Reads through all client check in forms to create story wins and testimonials via Canva
                    </li>
                    <li>Creates story polls and collects the data to find potential leads</li>
                    <li>Nadine is skilled in canva and has taken it upon herself to create canva posts and write copy for our Instagram page on a weekly basis.</li>
                    </ul>
                    </div>
                    <Footer />
            </div>
            )
}