//Reducer
const initialState = {
   messages: [],
   user: 'anonymous'
};
console.log('État initial', initialState);

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'WEBSOCKET_CONNECT':
      {
        return {
          ...state,
        };
      }
    case 'MESSAGE_RECIEVE':
      {
        return {
            ...state,
            messages: [...state.messages, action.message]
        }
      }
    case 'MESSAGE_SEND':
      {
        return {
          ...state,
          messages: [...state.messages]
        };
      }
    case 'USERNAME_SET':
      {
        return {
        ...state,
        user: action.user
        }
      }
    default:
      return state;
  }
};

export default reducer;
