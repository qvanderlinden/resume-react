import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-size: 2em;
  color: ${props => props.theme["primary-color"]};
  font-weight: 700;
`

const Name = () => <Container>Quentin Vanderlinden</Container>

export default Name
