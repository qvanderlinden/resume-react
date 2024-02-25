import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2024 - Present',
    location: 'Enobase, Brussels',
    text: (
      <div>
        I'm currently helping a friend on his startup idea while looking for my next mission. I'm developing in-house tooling to detect changes made to a declarative database schema in order to automatically generate TypeScript-based database migrations.
      </div>
    ),
    tags: [
      'TypeScript',
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
        <p>I helped digitalizing the subsidies processes for a client of Embie by developing a brand new web platform where citizens/companies can issue subsidies requests for their projects abroad and track their status throughout the project lifecycle. The platform also enables the client agents to review the requests, ask for modifications, and perform many other administrative tasks.</p>
        <p>In addition to my technical role, I also provided some guidance on following an agile way of working and coaching to more junior developers.</p>
      </div>
    ),
    tags: [
      'React',
      'Next.js',
      'TypeScript',
      'tRPC',
      'State machine',
      'GraphQL',
      'Docker',
      'Kubernetes',
      'Github Actions',
      'Keycloak'
    ],
  },
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2019 - Oct. 2022',
    location: 'IMEC, Leuven',
    text: (
      <div>
        <p>At first, I worked on several prototyping projects related to smart cities and developed in-house tooling to enable them. The projects were developed for research purposes and their ultimate goal was to empower decision makers and citizen with map visualizations displaying sensor data to make informed decisions. </p>
        <p>Then, I joined the Digital Twin team where I focused more on backend development and I developed and maintained a variety of micro-services, discovered event streams processing with Kafka, touched on DevOps, learned infrastructure as code, etc.</p>
        <p>For the last few months, I worked on a data science project related to urban mobility to better understand how pedestrians, cyclists and cars move in flemish cities. The findings could then be used to improve the city mobility infrastructure and/or predict the influence of closing particular roads on neighboring streets. I was involved in all the steps of the project, namely data acquisition (static datasets and scraping web APIs), data transformation and cleansing, modelling (a convex optimization program based on dynamics equations), model validation and output interpretation. </p>
      </div>
    ),
    tags: [
      'React',
      'Redux',
      'Redux-Saga',
      'Mapbox',
      'Deck.gl',
      'GraphQL',
      'Kafka',
      'Docker',
      'Kubernetes',
      'Azure DevOps',
      'Terraform',
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
    'I worked as a data scientist for the Big Data & Analytics department. For the majority of my employment there, I worked on a business intelligence project for one of the top players in the insurance industry in Belgium, for whom we built a data warehouse using the data vault architecture. My role was mainly maintenance but I also had the chance to implement a few ETL workflows. The rest of my time was split on several smaller projects where I used Python and QGIS to perform location intelligence.',
    tags: ['Google Maps Platform', 'Python', 'SQL', 'QGIS'],
  },
];
const WorkingExperience = () => (
  <>
  <ItemGroup title="Working Experience" items={items.slice(0, 3)} />
  <div style={{ height: 32 }}></div>
  <ItemGroup items={items.slice(3)} />
  </>
);

export default WorkingExperience;
