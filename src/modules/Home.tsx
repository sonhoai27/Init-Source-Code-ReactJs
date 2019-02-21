import * as React from 'react';
import List from './components/List';
import { API_NEWS } from '@app/shared/consts';

const S = require('./Home.scss')

const HomeScreen = () => {
  const [sourcesState, setSourcesState] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/sources?apiKey=${API_NEWS}`)
      .then(response => response.json())
      .then(data => setSourcesState(data.sources));
  }, [sourcesState]);

  return (
    <ul className={S['home']}>
      <List
        list={sourcesState}/>
    </ul>
  )
}

export default HomeScreen
