import React from 'react';

import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';

import './app.sass';


export default class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Settings />
        <Messages />
        <Form />
      </div>
    )
  }
}
