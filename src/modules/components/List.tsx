import * as React from 'react';

const uuidv4 = require('uuid/v4');

import Item from './Item';

const List = ({ list }) => (
  list
  && list.length > 0
  && list.map(element => <Item key={uuidv4()} data={element}/>)
)

export default List
