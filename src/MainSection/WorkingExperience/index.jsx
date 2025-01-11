import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  {
    title: 'Automation Engineer (freelance)',
    period: 'May. 2024 - January 2025',
    location: 'Cebir, Kortenberg',
    text: (
      <div>
        I automated an internal process that computes test takings statistics and generated detailed reports. This process used to be performed by employees and often took several weeks to complete. Their process was split into several sub-processes and they had to perform lots of copy pasting of both code and data resulting from a sub-process to adapt the rest of the chain. The automation I developed eliminated the need for such manual interactions, hence eliminating the risk of human error and drastically reducing the computation time to a few minutes by using appropriate tools.
      </div>
    ),
    tags: [
      'Python',
      'Airflow',
      'Polars',
      'python-docx',
      'openpyxl',
    ],
  },
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2024 - May 2024',
    location: 'Enobase, Brussels',
    text: (
      <div>
        I helped a friend on his startup idea while looking for my next mission. I developed in-house tooling to detect changes made to a declarative database schema specified in code in order to automatically generate TypeScript-based database migrations.
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
        <div style={{ height: 64 }} />
        <p>For the last few months, I worked on a data science project related to urban mobility to better understand how pedestrians, cyclists and cars move in flemish cities. The findings could then be used to improve the city mobility infrastructure and/or predict the influence of closing particular roads on neighboring streets. I was involved in all the steps of the project, namely data acquisition (static datasets and scraping web APIs), data transformation and cleansing, modelling (a convex optimization program based on dynamics equations), model validation and output interpretation. </p>
      </div>
    ),
    tags: [
      'TypeScript',
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
      "Python",
      "Pandas",
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
  <ItemGroup title="Working Experience" items={items} />
  {/* <div style={{ height: 48 }}></div> */}
  {/* <ItemGroup items={items} /> */}
  </>
);

export default WorkingExperience;
