import React, { Component } from 'react';
import { get } from '../core/ajax';

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: [],
      isError: false
    };
  }
  componentWillMount() {
    get('api/sessions')
      .then(response => {
        this.setState({
          sessions: response.data.sessions
        });
      })
      .catch(err => {
        this.setState({
          isError: true
        });
      });
  }
  render() {
    return (
      <div className="lists">
        {this.state.sessions.map(current => {
          return (
            <div>
              <h1>{current.title}</h1>
              <p>{current.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
