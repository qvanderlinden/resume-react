import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2024 - Present',
    location: 'Enobase, Brussels',
    text: (
      <div>
        I am currently working on tooling to generate TypeScript database migrations based on a declarative schema.
      </div>
    ),
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'Trigger.dev',
      'Postgres',
      'Kysely',
    ],
  },
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Oct. 2022 - Dec. 2023',
    location: 'Embie, Brussels',
    text: (
      <div>
        I helped digitalizing the subsidies processes for WBI by developing a brand new web platform where citizens can issue subsidies requests for their projects abroad and track their status throughout the multiple steps. WBI agents can also use the platform to review the requests, ask for modifications, ask for validations of their superiors, and many other administrative tasks.
      </div>
    ),
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'State machine',
      'GraphQL'
    ],
  },
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2019 - Oct. 2022',
    location: 'IMEC, Leuven',
    text: (
      <div>
        <p>For the first 3 years, I worked on a plethora of prototyping projects related to smart cities, as well as tooling to enable them. The projects were for research purposes and their ultimate goal was to empower decision makers and citizen with map visualizations displaying sensor data. </p>
        <p>For the last few months, I worked on a data science project related to urban mobility to better understand how pedestrians, cyclist and cars moved in flemish cities. The findings could then be used to improve the city mobility infrastructure and/or predict the influence of closing particular roads on neighboring streets.</p>
      </div>
    ),
    tags: [
      'React',
      'Redux',
      'Redux-Saga',
      'Mapbox',
      'Deck.gl',
      'GraphQL',
      'Docker',
      'Kubernetes',
      'DevOps',
      'Express.js',
      'TypeScript',
      "Python",
      "Pandas",
      "Convex Optimization",
      "OSQP"
    ],
  },
  {
    title: 'Fullstack Software Engineer',
    period: 'Nov. 2016 - Jan. 2019',
    location: 'The Great Circle, Rixensart',
    text:
      'I spent most of my time developing frontend web applications, whose main purposes were to assist sailors in their decision making (ranging from amateurs to professionals). I also developed a few backend services to pair with our frontends, played with or designed algorithms when the occasion arose and implemented data retrieval/manipulation pipelines to integrate new weather data sources within our backend infrastructure.',
    tags: [
      'React',
      'Redux',
      'Mapbox',
      'Electron',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Linux',
      'Heroku',
    ],
  },
  {
    title: 'Associate Consultant',
    period: 'Oct. 2015 - Nov. 2016',
    location: 'Computer Sciences Corporation, Zaventem',
    text:
    'I worked as a data scientist for the Big Data & Analytics department. For the majority of my employment there, I worked on a business intelligence project for one of the top players in the insurance industry in Belgium. My role was mainly maintenance of the existing enterprise data warehouse but I also had the chance to implement a few ETL workflows. The rest of my time was split on several smaller projects related to location intelligence.',
    tags: ['Google Maps Platform', 'Python', 'SQL', 'QGIS'],
  },
];
const WorkingExperience = () => (
  <>
  <ItemGroup title="Working Experience" items={items.slice(0, 3)} />
  <div style={{ height: 120 }}></div>
  <ItemGroup items={items.slice(3)} />
  </>
);

export default WorkingExperience;
