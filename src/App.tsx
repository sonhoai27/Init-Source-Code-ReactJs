import * as React from 'react';
import { SERVER_API_URL } from '@app/Shared/Consts';
import Row from '@app/Shared/Components/Grid/Row';
import Col from '@app/Shared/Components/Grid/Col';

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  render() {

    return (
      <div>
        <h1>{SERVER_API_URL}</h1>
        <Row>
          <Col sm={6} xs={6}>AAA</Col>
          <Col sm={6} xs={6}>BBB</Col>
        </Row>
      </div>
    )
  }
}

export default App;
