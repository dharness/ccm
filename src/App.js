import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'


const PrimaryLayout = () => (
  <div>
    <Route exact path='/' component={Signup} />
    <Route exact path='/home' component={Home} />
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;
