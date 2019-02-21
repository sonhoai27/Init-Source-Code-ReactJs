import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

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
);

OfflinePluginRuntime.install({
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    // Tells to new SW to take control immediately
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
    // Reload the webpage to load into the new version
    window.location.reload();
  },

  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});
