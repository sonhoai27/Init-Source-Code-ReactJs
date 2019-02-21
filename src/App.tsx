import * as React from 'react';
import { SERVER_API_URL } from '@app/Shared/Consts';

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {

    return (
      <div>
        <h1>{SERVER_API_URL}</h1>
      </div>
    )
  }
}

export default App;
