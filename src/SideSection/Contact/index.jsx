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
  <MailTo email="quentin.vanderlinden@gmail.com" />,
  "+32 (0) 478 03 57 28",
]

const Contact = () => <ItemGroup title="Contact" items={items} />

export default Contact
