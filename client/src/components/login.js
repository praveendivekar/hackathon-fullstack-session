import React, { Component } from 'react';
import { post } from '../core/ajax';
import { setSession } from '../core/session';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  proceedToLogin = () => {
    post('login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        if (response.data.success) {
          setSession(response.data.token);
          this.props.history.push('/lists');
        }
      })
      .catch(err => {});
  };

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Password"
          />
          <button onClick={this.proceedToLogin}>Login</button>
        </div>
      </div>
    );
  }
}
