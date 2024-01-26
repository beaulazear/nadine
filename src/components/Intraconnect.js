import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Slideshow from './Slideshow';
import Offering from './Offering';
import { offeringsData } from '../data/offerings';

const StyledIntraconnectContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  width: fit-content;
  background-color: #f5f5f5;
  border-radius: 10px;
  max-width: 600px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledHeader = styled.h1`
  font-family: 'Arial, sans-serif';
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

const StyledSubHeader = styled.h2`
  font-family: 'Arial, sans-serif';
  font-size: 18px;
  color: #3498db;
  margin-bottom: 20px;
`;

const StyledAboutMeBioContainer = styled(Container)`
  text-align: left;
  margin-bottom: 20px;
`;

const StyledAboutMeBio = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledOfferingsRow = styled(Row)`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
max-width: 2000px;
margin-left: 5px;
margin-right: 5px;
`;

const StyledOfferingCol = styled(Col)`
flex: 1;
max-width: 450px;
margin-bottom: 20px;
`;

const Intraconnect = () => {
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
};

export default Intraconnect;
