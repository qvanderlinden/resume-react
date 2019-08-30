import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  'Belgian, single',
  'Born May 14, 1991',
  "Rue de l'Argentine 59/1, 1310 La Hulpe",
];

const Details = () => <ItemGroup title="Details" items={items} />;

export default Details;
