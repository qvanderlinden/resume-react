import React from "react"

import ItemGroup from "../Components/ItemGroup"

const items = [
  {
    title: "M.Sc. in Applied Mathematics, magna cum laude",
    period: "2013-2015",
    location: "Université Catholique de Louvain, Louvain-la-Neuve",
    text: (
      <div>
        This master revolves around the concept of mathematical model to solve
        complex interdisciplinary engineering problems. Students learn how to
        solve these problems through training in mathematical modelling,
        simulation and optimization. More specifically (but not exhaustively), I
        followed courses where mathematical models and simulations were applied
        to finance, machine learning, epidemiology, quantitative energy
        economics, tsunami dynamics, etc.
        <br />
        <br />
        My master’s thesis was called "Structure Mining in Complex Networks",
        and was supervised by Jean-Charles Delvenne. In that context, I designed
        3 optimization algorithms based on modularity maximization to perform
        fuzzy community detection. Then, I compared them with state of the art
        algorithms on battle-tested benchmarks.
      </div>
    ),
    tags: ["Python", "C", "Java", "MATLAB", "LaTeX", "AMPL"]
  }
  // {
  //   title: "B.Sc. in Civil Engineering",
  //   period: "2009-2013",
  //   location: "Université Catholique de Louvain, Louvain-la-Neuve",
  //   text: "Major in Applied Mathematics, Minor in Computer Science"
  // }
]
const Education = () => <ItemGroup title="Education" items={items} />

export default Education
