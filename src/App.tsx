import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import HomeScreen from '@app/modules/Home';

interface IAppProps {
}

class App extends React.Component<IAppProps> {
  constructor(props: any) {
    super(props)
  }

  render() {

    return (
      <Router>
        <React.Suspense fallback={''}>
          <Switch>
            <Route path="/" component={HomeScreen}/>
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App;
