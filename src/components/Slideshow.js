import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import testi from "../images/testi.jpg"
import testi2 from "../images/testi2.jpg"
import testi3 from "../images/testi3.jpg"


export default function Slideshow() {
    const images = [testi, testi2, testi3]
    return (
        <div className="sliderDiv">
            <Slide>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}