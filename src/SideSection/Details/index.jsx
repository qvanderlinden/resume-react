import React from 'react';

import ItemGroup from '../Components/ItemGroup';

const items = [
  'Belgian, dad of Tasco 🐕',
  'Born May 14, 1991',
  "Petite Corniche 9, 5340 Gesves",
];

const Details = () => <ItemGroup title="Details" items={items} />;

export default Details;
