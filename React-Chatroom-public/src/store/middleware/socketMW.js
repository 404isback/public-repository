import { receiveMessage } from '../actions';
import io from 'socket.io-client';

const socketMW = store => next => (action) => {
  // we define an instance of websocket(empty here)
  let socket;
  console.log('i\'m middleware', action);

  switch (action.type) {
    case "WEBSOCKET_CONNECT": 
    {
      // Socket connexion to node.js server on 3001
      socket = io.connect('http://localhost:3001');

      // Pull message from server
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });

      // Socket error management
      socket.on('error', (error) => {
        console.log('connexion error')
        console.log(error)
      });
    };
    case "MESSAGE_SEND": 
    {
      if(action.message) {
        // Socket connexion to node.js server on 3001
        socket = io.connect('http://localhost:3001');

        // Message definition from action prop
        const message = action.message;

        // Message transmission to socket.io server
        socket.emit('send_message', message, (data) => {
              store.dispatch(receiveMessage(data))
            });

        // Socket error management
        socket.on('error', (error) => {
          console.log('emit error')
          console.log(error)
        });
      };
    };
  }

  next(action);
};

export default socketMW;