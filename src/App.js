import React, { Component } from "react"
import styled from "styled-components"

import MainSection from "./MainSection"
import SideSection from "./SideSection"

// in %
const MAIN_SECTION_WIDTH = 75

const Container = styled.div`
  height: 100%;
`
const MainSectionContainer = styled.div`
  float: left;
  width: ${MAIN_SECTION_WIDTH}%;
  height: 100%;
`
const SideSectionContainer = styled.div`
  float: left;
  width: ${100 - MAIN_SECTION_WIDTH}%;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Container>
        <MainSectionContainer>
          <MainSection />
        </MainSectionContainer>
        <SideSectionContainer>
          <SideSection />
        </SideSectionContainer>
      </Container>
    )
  }
}

export default App
