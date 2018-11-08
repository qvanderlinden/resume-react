import React from "react"
import styled from "styled-components"

import ItemGroup from "../Components/ItemGroup"
import ProgressBar from "../Components/ProgressBar"

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const LanguageLevel = ({ title, level }) => (
  <Container>
    {title}
    <ProgressBar progress={level} />
  </Container>
)

const items = [
  <LanguageLevel title="French (native)" level="100" />,
  <LanguageLevel title="English (fluent)" level="90" />,
  <LanguageLevel title="Dutch (basics)" level="40" />
]

const Languages = () => <ItemGroup title="Languages" items={items} />

export default Languages
