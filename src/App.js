import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NewProfile from './components/NewProfile'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/new' component={NewProfile} />
  </Switch>
)

export default App;
