import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme["light-gray"]}
  height: 6px;
  border-radius: 3px;
  `
const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme["primary-color"]};
  height: 100%;
  border-radius: 3px;
  width: ${props => props.progress}%;
`

const ProgressBar = ({ progress }) => (
  <Container>
    <Progress progress={progress} />
  </Container>
)

export default ProgressBar
