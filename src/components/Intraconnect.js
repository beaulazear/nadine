import React from "react";
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Slideshow from "./Slideshow";
import Offering from "./Offering";
import { offeringsData } from "../data/offerings";

const StyledIntraconnectContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  max-width: 450px; /* Adjusted max-width */
  margin: 0 auto; /* Centered in the screen */
`;

const StyledHeader = styled.h1`
  font-family: 'Arial, sans-serif';
  font-size: 36px;
  margin-bottom: 10px;
`;

const StyledSubHeader = styled.h2`
  font-family: 'Arial, sans-serif';
  font-size: 24px;
  color: #3498db;
`;

const StyledAboutMeBioContainer = styled(Container)`
  text-align: center;
`;

const StyledAboutMeBio = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledOfferingsRow = styled(Row)`
  gap: 20px;
  justify-content: center; /* Center the offerings in their parent container */
`;

const StyledOfferingCol = styled(Col)`
  width: 450px;
  margin-bottom: 20px;
`;

export default function Intraconnect() {
    return (
        <StyledIntraconnectContainer>
            <StyledHeaderContainer>
                <StyledHeader>Intraconnect</StyledHeader>
                <StyledSubHeader>Discover the Inner Connections</StyledSubHeader>
            </StyledHeaderContainer>

            <StyledAboutMeBioContainer>
                <StyledAboutMeBio>
                    Did I mention I am a jack of all trades? I am a palmist, in addition to a Human Design reader. The inner connections we have with ourselves, and how it resonates out into reality fascinates me. I have given many palm readings which show the roadmap of people's lives. I have come to understand the misrepresentation of its “future-telling” origins. While it can highlight potential unknowns…palm readings reveal our character, relationships, past hardships, and so much more. In fact, as we evolve in our lives the lines on our palm can change! This reinforces the notion that you are in fact in control of your destiny.
                </StyledAboutMeBio>
            </StyledAboutMeBioContainer>

            <StyledOfferingsRow>
                {offeringsData.map((offer) => (
                    <StyledOfferingCol key={offer.id} xs={12} md={6} lg={4}>
                        <Offering data={offer} />
                    </StyledOfferingCol>
                ))}
            </StyledOfferingsRow>

            <StyledHeaderContainer>
                <StyledHeader>Testimonials</StyledHeader>
            </StyledHeaderContainer>
            <Slideshow />
        </StyledIntraconnectContainer>
    );
}
