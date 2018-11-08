import React from "react"
import styled from "styled-components"

const Container = styled.div``
const TitleContainer = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme["secondary-color"]};
`
const ItemContainer = styled.div`
  word-wrap: break-word;
  margin-bottom: 10px;
`

const ItemGroup = ({ title, items }) => (
  <Container>
    <TitleContainer>{title}</TitleContainer>
    {items.map(item => (
      <ItemContainer>{item}</ItemContainer>
    ))}
  </Container>
)

export default ItemGroup
