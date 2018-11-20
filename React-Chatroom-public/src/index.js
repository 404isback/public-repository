import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { connectSocket } from 'src/store/actions';

import App from 'src/components/App';
import store from 'src/store';

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
const targetNode = document.getElementById('root');
render(rootComponent, targetNode);

store.dispatch(connectSocket());