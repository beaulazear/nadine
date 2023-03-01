import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import testi from "../images/testi.jpg"
import testi2 from "../images/testi2.jpg"
import testi3 from "../images/testi3.jpg"
import testi4 from "../images/testi4.jpg"
import testi5 from "../images/testi5.jpg"


export default function Slideshow() {
    const images = [testi, testi2, testi3, testi4, testi5]
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
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    </div>
                </div>
                <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}