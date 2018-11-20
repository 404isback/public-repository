import React from 'react';
import PropTypes from 'prop-types';

import './userform.sass';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.EnablerButton = React.createRef();
    this.AliasForm = React.createRef();
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const user = this.input.value;

    // Sending (dispatching) this action to the Redux store.
    this.props.setUser(user);
    this.input.placeholder = this.props.user ? this.props.user : 'anonymous';
    this.input.blur();
    this.enable();
  }

  enable = () => {
    const aliasForm = document.getElementById('aliasForm');
    console.log(aliasForm)
    const enablerButton = document.getElementById('enablerButton');
    console.log(enablerButton)
    // button class toggle to opened state
    enablerButton.classList.toggle('enabler-button');
    enablerButton.classList.toggle('enabler-button-open');
    // form class toggle to visible
    aliasForm.classList.toggle('hidden');
    aliasForm.classList.toggle('user-form');
  }

  render() {
    const user = this.props.user ? this.props.user : 'anonymous';
    console.log(user)
    return (
      <div className="user">
        <div className="user-id"> 
          < div className = "user-id-intro" > You 're chatting as&nbsp;</div>
          <div className="user-id-user">{user}</div>
        </div>  
        <div className="enabler">
        <button type="button" id="enablerButton" className = "enabler-button" onClick={this.enable}>+</button>
          <form id="aliasForm" className="hidden" onSubmit={this.onSubmit}>
            <input
              ref={input => this.input = input}
              type="text"
              placeholder="anonymous"
              maxLength = "15"
              className="user-form-input"
            />
            <button type="submit" className="user-form-button">Ok</button>
          </form>
        </div>  
      </div>
    );
  }
}
