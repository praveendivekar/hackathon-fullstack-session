import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Lists from './components/lists';
import Login from './components/login';

import AuthenicateRoute from './hoc/authRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fullstack Application</h1>

          <p>The Authentication and Authorization using JWT</p>
        </header>

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={AuthenicateRoute(Login)} />
            <Route path="/lists" component={AuthenicateRoute(Lists)} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
