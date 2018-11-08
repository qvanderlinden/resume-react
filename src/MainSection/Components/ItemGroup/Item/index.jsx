import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const VerticalBar = styled.div`
  width: 6px;
  border-radius: 3px;
  flex-shrink: 0;
  background-color: ${props => props.theme["light-gray"]};
  margin-right: 15px;
`
const Content = styled.div`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`
const TitleContainer = styled.div`
  font-weight: 600;
  font-size: 1.2em;
  color: ${props => props.theme["primary-color"]};
`
const PeriodContainer = styled.div`
  font-style: italic;
`
const LocationContainer = styled.div`
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 10px;
  color: ${props => props.theme["secondary-color"]};
`
const TextContainer = styled.div`
  margin-bottom: 10px;
`
const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const TagContainer = styled.div`
  font-size: 0.9em;
  background-color: ${props => props.theme["light-gray"]};
  padding: 2px 4px 2px 4px;
  border-radius: 5px;
  margin-right: 4px;
  margin-bottom: 4px;
`

const Item = ({ title, period, location, text, tags }) => (
  <Container>
    <VerticalBar />
    <Content>
      <Header>
        <TitleContainer>{title}</TitleContainer>
        <PeriodContainer>{period}</PeriodContainer>
      </Header>
      <LocationContainer>{location}</LocationContainer>
      <TextContainer>{text}</TextContainer>
      {tags && (
        <TagsContainer>
          {tags.map(tag => (
            <TagContainer>{tag}</TagContainer>
          ))}
        </TagsContainer>
      )}
    </Content>
  </Container>
)

export default Item
