import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'

interface IAppProps {
}

class App extends React.Component<IAppProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('/api/brands')
    .then((result) => {
      console.log(result)
    })
  }

  render() {

    return (
      <Router>
        <React.Suspense fallback={''}>
          <Switch>
            <Route path="/" render={() => {
              return <h1>AAAA</h1>
            }}/>
          </Switch>
        </React.Suspense>
      </Router>
    )
  }
}

export default App;
