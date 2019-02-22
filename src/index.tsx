import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import ErrorBoundary from '@app/configs/ErrorBoundary'

import initStore from '@app/stores'
import App from '@app/App'

render(
  <ErrorBoundary>
    <AppContainer>
      <Provider store={initStore}>
        <App/>
      </Provider>
    </AppContainer>
  </ErrorBoundary>,
  document.getElementById('app'),
)
