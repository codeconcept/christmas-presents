import React from 'react';
import { Route } from 'react-router-dom';

import Info from './Info.jsx';
import PresentList from './PresentList.jsx';
import NavBar from './NavBar.jsx';

import Home from './Home';

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/presents" component={PresentList} />
    <Route path="/info" component={Info} />
  </div>
);

export default App;
