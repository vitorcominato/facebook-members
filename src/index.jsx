import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { Store, Persistor } from './Store';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
