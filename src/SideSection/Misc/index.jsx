import React from "react"
import styled from "styled-components"

import ItemGroup from "../Components/ItemGroup"

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme["primary-color"]};
  font-weight: 500;
`

const items = [
  <div>
    2x Ironman 70.3 finisher & 1x Ironman finisher
  </div>,
  <div>
    3rd place at the{" "}
    <Link
      target="_blank"
      href="https://www.siam.org/Students-Education/Resources/For-K-12-Students/Detail/math-matters-apply-it"
    >
      Math Matters, Apply It !
    </Link>{" "}
    applied mathematics awareness campaign for a vulgarisation{" "}
    <Link
      target="_blank"
      href="http://evoq-eval.siam.org/Portals/0/Math%20Matters/MathMatters_effects.pdf?ver=2018-04-05-143040-953"
    >
      paper on special effects
    </Link>
  </div>
]

const Misc = () => <ItemGroup title="Miscellaneous" items={items} />

export default Misc
