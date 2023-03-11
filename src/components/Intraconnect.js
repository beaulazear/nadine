import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import { offeringsData } from "../data/offerings";
import Offering from "./Offering";

export default function Intraconnect() {
    const TestimonialsTitle = "Testimonials"
    const intraconnectTitle = "Intraconnect"

    return (
        <div className="testimonialDiv">
            <Header title={intraconnectTitle} />
            <ul className="offeringsUl">
                {offeringsData.map((offer) => (
                    <Offering key={offer.id} data={offer} />
                ))}
            </ul>
            <Header title={TestimonialsTitle} />
            <Slideshow />
            <Footer />
        </div>
    )
}