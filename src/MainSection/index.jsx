import React from "react"
import styled from "styled-components"

import Name from "./Name"
import Description from "./Description"
import WorkingExperience from "./WorkingExperience"
import Education from "./Education"

const Container = styled.div`
  height: 100%;
  padding: 32px;
  text-align: justify;
`
const NameContainer = styled.div`
  margin-bottom: 16px;
`
const DescriptionContainer = styled.div`
  margin-bottom: 16px;
`
const ItemGroupContainer = styled.div`
  margin-bottom: 16px;
`

const MainSection = () => (
  <Container>
    <NameContainer>
      <Name />
    </NameContainer>
    <DescriptionContainer>
      <Description />
    </DescriptionContainer>
    <ItemGroupContainer>
      <WorkingExperience />
    </ItemGroupContainer>
    <ItemGroupContainer>
      <Education />
    </ItemGroupContainer>
  </Container>
)

export default MainSection
