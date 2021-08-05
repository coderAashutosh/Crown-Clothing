import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>

        <Switch>

          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />

        </Switch>
      </div>
    );
  }
}

export default App;