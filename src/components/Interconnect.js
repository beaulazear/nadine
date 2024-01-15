import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Offering from "./Offering";
import { marketingOfferingsData } from "../data/marketingOfferings";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%; /* Use width instead of max-width to allow the container to expand */
  max-width: 1200px; /* Set a max-width if you still want to limit the width */
  margin: 0 auto;
`;

const StyledHeaderContainer = styled(Container)`
  text-align: center;
  padding: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  max-width: 450px; /* Adjusted max-width */
  margin: 0 auto; /* Centered in the screen */
  margin-bottom: 10px;
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
  margin-bottom:10px
`;

const StyledAboutMeBio = styled.div`
  font-family: 'Arial, sans-serif';
  color: #333;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const StyledOfferingsContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledOfferingCol = styled(Col)`
  width: 450px;
  margin-bottom: 20px;
`;

const StyledTestimonialsContainer = styled(Container)`
  max-width: 800px;
  text-align: center;
`;

const StyledTestimonial = styled.div`
  font-family: 'Arial, sans-serif';
  font-size: 18px;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const StyledTestimonialHeader = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledTestimonialContent = styled.div`
  text-align: left;
`;

const StyledListItem = styled.li`
  list-style-type: disc;
  margin-bottom: 5px;
`;

export default function Interconnect() {
    return (
        <StyledWrapper>
            <StyledHeaderContainer>
                <StyledHeader>Interconnect</StyledHeader>
                <StyledSubHeader>Your Bridge to Authentic Marketing</StyledSubHeader>
            </StyledHeaderContainer>

            <StyledAboutMeBioContainer>
                <StyledAboutMeBio>
                    It is my passion to bridge the space between marketing and your audience. To build campaigns that focus on organic growth, feel more authentic to your values, and release the pressure off you, by me creating/setting up your accounts, making content, scheduling, and engaging with your audience.
                </StyledAboutMeBio>
            </StyledAboutMeBioContainer>

            <StyledOfferingsContainer>
                {marketingOfferingsData.map((offer) => (
                    <StyledOfferingCol key={offer.id} xs={12} md={6} lg={4}>
                        <Offering data={offer} />
                    </StyledOfferingCol>
                ))}
            </StyledOfferingsContainer>

            <StyledHeaderContainer>
                <StyledHeader>References</StyledHeader>
            </StyledHeaderContainer>

            <StyledTestimonialsContainer>
                <StyledTestimonial>
                    <StyledTestimonialHeader>Lacey Pettibone, <u>Pocket Blonde Fitness LLC</u></StyledTestimonialHeader>
                    <StyledTestimonialContent>
                        <StyledListItem>Managing our content calendar including scheduling weekly content to fit the aesthetics of our page and looking through old content to find opportunities to repurpose.</StyledListItem>
                        <StyledListItem>Created and manages our content carousel including post links content buckets, and repurposing</StyledListItem>
                        <StyledListItem>Researches our competitors to come up with new content ideas</StyledListItem>
                        <StyledListItem>Manages our Facebook page including welcoming new members, finding leads, and creating some of the content</StyledListItem>
                        <StyledListItem>Reads through all client check-in forms to create story wins and testimonials via Canva</StyledListItem>
                        <StyledListItem>Creates story polls and collects the data to find potential leads</StyledListItem>
                        <StyledListItem>Nadine is skilled in Canva and has taken it upon herself to create Canva posts and write copy for our Instagram page on a weekly basis.</StyledListItem>
                    </StyledTestimonialContent>
                </StyledTestimonial>
            </StyledTestimonialsContainer>
        </StyledWrapper>
    );
}
