import React from 'react';

import './messages.sass'

export default class Messages extends React.Component {

  render() {
    const messages = this.props.messages;
    console.log('message props', this.props)
    return (
      <div className="messages">
          {(messages) ? messages.map(message => 
          <div key={message.id} className="messages-message">
            <div className="messages-message-context">
              <div className={ message.id%2 == 0 ?
                "messages-message-context-user-odd": "messages-message-context-user-even"}> {
                  message.user
                } </div>
              <div className="messages-message-context-timestamp">{message.timestamp}</div>
            </div>
            <div className={ message.id%2 == 0 ?
            "messages-message-content-odd" : "messages-message-content-even" }>{message.content}</div>
          </div>) : <div>Podzob</div>}
      </div>
    )
  }
}
