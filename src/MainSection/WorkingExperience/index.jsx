import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  {
    title: 'Fullstack Software Engineer (freelance)',
    period: 'Jan. 2019 - Present',
    location: 'IMEC, Leuven',
    text: (
      <div>
        <div style={{ marginBottom: '8pt' }}>
          I was first involved in the development of the ExperienceKit product,
          where I used my frontend skills to implement a user-friendly interface
          for user researchers to configure experience sampling experiments.
        </div>
        <div>
          Lately, I have been working on a heavily backend-oriented project
          whose purpose is the orchestration of simulations and their easy
          integration with frontend visualisation projects.
        </div>
      </div>
    ),
    tags: [
      'React',
      'Redux',
      'Redux-Saga',
      'GraphQL',
      'Docker',
      'Node.js',
      'Express.js',
      'TypeScript',
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
      'Redux-Saga',
      'Mapbox',
      'Deck.gl',
      'Electron',
      'Node.js',
      'Express.js',
      'TypeScript',
      'Python',
      'Linux',
      'Heroku',
    ],
  },
  {
    title: 'Associate Consultant',
    period: 'Oct. 2015 - Nov. 2016',
    location: 'Computer Sciences Corporation, Zaventem',
    // text:
    // 'I worked as a data scientist for the Big Data & Analytics department. For the majority of my employment there, I worked on a business intelligence project for one of the top players in the insurance industry in Belgium. My role was mainly maintenance of the existing enterprise data warehouse but I also had the chance to implement a few ETL workflows. The rest of my time was split on several smaller projects related to location intelligence.',
    tags: ['Google Maps Platform', 'Python', 'SQL', 'QGIS'],
  },
];
const WorkingExperience = () => (
  <ItemGroup title="Working Experience" items={items} />
);

export default WorkingExperience;
