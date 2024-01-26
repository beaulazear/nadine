import React from 'react';
import styled from 'styled-components';

const StyledOfferingDiv = styled.div`
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 400px; /* Set a fixed width */
  height: 250px; /* Set a fixed height */
  margin: 0 auto;
`;

const StyledHeading = styled.h3`
  font-family: 'Arial, sans-serif';
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const StyledSubheading = styled.h4`
  font-family: 'Arial, sans-serif';
  font-size: 18px;
  color: #777;
  margin-bottom: 10px;
`;

const StyledDescription = styled.li`
  font-family: 'Arial, sans-serif';
  font-size: 16px;
  color: #444;
`;

const Offering = ({ data }) => {
  return (
    <StyledOfferingDiv>
      <StyledHeading>{data.name}</StyledHeading>
      <StyledSubheading>{data.time}</StyledSubheading>
      <ul className="offeringDescriptions">
        {data.descriptions.map((desc) => (
          <StyledDescription key={desc.id}>{desc.info}</StyledDescription>
        ))}
      </ul>
    </StyledOfferingDiv>
  );
};

export default Offering;
