import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slideshow from "./Slideshow";

export default function Testimonials() {
    const testimonialsTitle = "Testimonials"

    return (
        <div className="testimonialDiv">
            <Header title={testimonialsTitle}/>
            <Slideshow />
            <Footer />
        </div>
    )
}