import React, { Component } from 'react';
import { isAuth } from '../core/session';

export default function AuthenicateRoute(Component) {
  return class AuthRoute extends Component {
    componentWillMount() {
      if (!isAuth()) {
        this.props.history.push('/');
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };
}
