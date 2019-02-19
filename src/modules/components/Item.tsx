import * as React from 'react';

const Item = ({ data }) => (
  <li>
    <p>{data.name}</p>
    <div>
      <span>{data.category}</span>
    </div>
    <p>{data.description}</p>
  </li>
)

export default Item
