import React from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import testi from "../images/testi.jpg"
import testi2 from "../images/testi2.jpg"
import testi3 from "../images/testi3.jpg"
import testi4 from "../images/testi4.jpg"
import testi5 from "../images/testi5.jpg"

const SlideshowWrapper = styled.div`
  max-width: 400px; /* Adjust the maximum width as needed */
  margin-bottom: 10px;
`;

const SlideItem = styled.div`
  height: 600px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

export default function Slideshow() {
    const images = [testi, testi2, testi3, testi4, testi5]

    return (
        <SlideshowWrapper>
            <Slide duration={5000}>
                {images.map((image, index) => (
                    <SlideItem key={index} style={{ backgroundImage: `url(${image})` }} />
                ))}
            </Slide>
        </SlideshowWrapper>
    )
}
