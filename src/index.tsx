import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import ErrorBoundary from '@app/configs/ErrorBoundary'

import App from '@app/App'

render(
  <ErrorBoundary>
    <AppContainer>
      <App/>
    </AppContainer>
  </ErrorBoundary>,
  document.getElementById('app'),
);
