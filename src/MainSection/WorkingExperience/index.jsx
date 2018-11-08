import React from "react"

import ItemGroup from "../Components/ItemGroup"

const items = [
  {
    title: "Software Engineer",
    period: "Nov. 2016 - Present",
    location: "The Great Circle, Rixensart",
    text:
      "I spend most of my time developing frontend web applications, whose main purposes are to assist sailors in their decision making (ranging from amateurs to professionals). To a smaller extent, I also develop a few backend services to pair with our frontends, play with or design algorithms when the occasion arises and implement data retrieval/manipulation pipelines to integrate new weather data sources within our server infrastructure.",
    tags: [
      "React",
      "Redux",
      "Electron",
      "Mapbox",
      "Express.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Linux",
      "Heroku"
    ]
  },
  {
    title: "Associate Consultant",
    period: "Oct. 2015 - Nov. 2016",
    location: "Computer Sciences Corporation, Zaventem",
    text:
      "I worked as a data scientist for the Big Data & Analytics department. For the majority of my employment there, I worked on a business intelligence project for one of the top players in the insurance industry in Belgium. My role was mainly maintenance of the existing enterprise data warehouse but I also had the chance to implement a few ETL workflows. The rest of my time was split on several smaller projects related to location intelligence.",
    tags: ["Google Maps Platform", "Python", "SQL", "QGIS"]
  }
]
const WorkingExperience = () => (
  <ItemGroup title="Working Experience" items={items} />
)

export default WorkingExperience
