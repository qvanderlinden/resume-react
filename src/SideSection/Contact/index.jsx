import React from "react"
import styled from "styled-components"

import ItemGroup from "../Components/ItemGroup"

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme["primary-color"]};
  font-weight: 500;
`

const MailTo = ({ email }) => <Link href={`mailto:${email}`}>{email}</Link>

const items = [
  "+32 (0) 478 03 57 28",
  <MailTo email="quentin.vanderlinden@gmail.com" />
]

const Contact = () => <ItemGroup title="Contact" items={items} />

export default Contact
