import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: ${props => props.theme["light-gray"]};
  overflow: hidden;
`

const Picture = () => <Container />

export default Picture
