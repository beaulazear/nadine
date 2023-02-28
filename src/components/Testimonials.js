import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import Slideshow from "./Slideshow";

export default function Testimonials() {
    const testimonialsTitle = "Testimonials"

    return (
        <div className="testimonialDiv">
            <NavLinks />
            <Header title={testimonialsTitle}/>
            <Slideshow />
            <Footer />
        </div>
    )
}