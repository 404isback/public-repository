/**
 * Types d'action
 */
export const WEBSOCKET_CONNECT = 'actions/WEBSOCKET_CONNECT';
export const MESSAGE_RECIEVE = 'actions/MESSAGE_RECIEVE';
export const MESSAGE_SEND = 'actions/MESSAGE_SEND';
/**
 * Action creators
 */
export const connectSocket = () => ({
  type: 'WEBSOCKET_CONNECT',
});

export const receiveMessage = (message) => ({
  type: 'MESSAGE_RECIEVE',
  message
})

export const emitMessage = (message) => ({
  type: 'MESSAGE_SEND',
  message
});

export const setUser = (user) => ({
  type: 'USERNAME_SET',
  user
});
