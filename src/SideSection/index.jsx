import React from 'react';
import styled from 'styled-components';

import Picture from './Picture';
import Details from './Details';
import Contact from './Contact';
import Languages from './Languages';
import Hobbies from './Hobbies';
import Misc from './Misc';

const Container = styled.div`
  height: 100%;
  padding: 30px;
  background-color: ${props => props.theme['superlight-gray']};
  font-size: 0.9em;
`;
const PictureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
`;
const DetailsContainer = styled.div`
  margin-bottom: 30px;
`;
const ContactContainer = styled.div`
  margin-bottom: 30px;
`;
const LanguagesContainer = styled.div`
  margin-bottom: 30px;
`;
const HobbiesContainer = styled.div`
  margin-bottom: 30px;
`;
const MiscContainer = styled.div`
  margin-bottom: 30px;
`;

const MainSection = () => (
  <Container>
    {/* <PictureContainer>
      <Picture />
    </PictureContainer> */}
    <DetailsContainer>
      <Details />
    </DetailsContainer>
    <ContactContainer>
      <Contact />
    </ContactContainer>
    <LanguagesContainer>
      <Languages />
    </LanguagesContainer>
    <HobbiesContainer>
      <Hobbies />
    </HobbiesContainer>
    <MiscContainer>
      <Misc />
    </MiscContainer>
  </Container>
);

export default MainSection;
