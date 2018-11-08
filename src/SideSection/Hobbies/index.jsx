import React from "react"

import ItemGroup from "../Components/ItemGroup"

const items = [
  "Endurance sports (running, cycling)",
  "Racket sports (squash, tennis, badminton)",
  "Watching TV shows and YouTube videos",
  "Listening to music",
  "Coding challenges"
]

const Hobbies = () => <ItemGroup title="Hobbies" items={items} />

export default Hobbies
