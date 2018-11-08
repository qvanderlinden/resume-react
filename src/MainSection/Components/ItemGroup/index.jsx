import React from "react"
import styled from "styled-components"

import Item from "./Item"

const TitleContainer = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.theme["secondary-color"]};
`
const ItemContainer = styled.div`
  margin-bottom: 25px;
`

const ItemGroup = ({ title, items }) => (
  <div>
    <TitleContainer>{title}</TitleContainer>
    {items.map(item => (
      <ItemContainer>
        <Item {...item} />
      </ItemContainer>
    ))}
  </div>
)

export default ItemGroup
