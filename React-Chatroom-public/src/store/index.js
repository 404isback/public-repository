import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from 'src/store/reducer'; // Our custom reducer
import socket from 'src/store/middleware/socketMW'; // Our server connection middleware
import timestamp from 'src/store/middleware/loggerMW' // Our timestamp middleware

// Extension Redux Dev Tools
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares custom — on n'en a qu'un seul
const socketMiddleware = applyMiddleware(socket);
const timestampMiddleware = applyMiddleware(timestamp);

// Enhancers : les extensions/outils + les middlewares custom
const enhancers = compose(socketMiddleware, timestampMiddleware, ...devTools);

// Store, configuré avec le reducer et les "enhancers"
const store = createStore(reducer, enhancers);

export default store;
