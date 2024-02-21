import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import MainSection from './MainSection';
import SideSection from './SideSection';

// in %
const MAIN_SECTION_WIDTH = 75;

const theme = {
  'primary-color': '#03b5aa',
  'secondary-color': 'black',
  'superlight-gray': '#f9f9f9',
  'light-gray': '#ededed',
  'dark-gray': '#5f5f5f',
};

const Container = styled.div`
  color: ${props => props.theme['dark-gray']};
  font-family: 'Montserrat', sans-serif;
  font-size: 10pt;
  line-height: 14pt;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 210px;
`;
const MainSectionContainer = styled.div`
  height: 100%;
`;
const SideSectionContainer = styled.div`
  height: 280mm;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <MainSectionContainer>
            <MainSection />
          </MainSectionContainer>
          <SideSectionContainer>
            <SideSection />
          </SideSectionContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
