import React from 'react';
import PropTypes from 'prop-types';

import './form.sass';

export default class Form extends React.Component {
  /**
   * User submitted the form and likely wants a new task to be added to the list.
   */
  onSubmit = (evt) => {
    evt.preventDefault();
    const message = {}
    // Creating a Redux action modelizing the user intent.
    message.content = this.input.value;
    message.user = this.props.user;
    // Sending (dispatching) this action to the Redux store.
    this.props.sendMessage(message);
    this.input.value='';
    this.input.placeholder = 'Message sent ( ͡° ͜ʖ ͡°) !';
    this.input.blur();
  }

  onFocus = () => (
    this.input.placeholder = 'Ecrivez un message'
  )

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          ref={input => this.input = input}
          type="text"
          placeholder="Ecrivez un message"
          className="form-input"
          onFocus={this.onFocus}
        />
        <button type="submit" className="form-button">Send</button>
      </form>
    );
  }
}
