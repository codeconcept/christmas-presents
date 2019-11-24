import React from 'react';
import { Route } from 'react-router-dom';

import Info from './Info.jsx';
import PresentList from './PresentList.jsx';
import NavBar from './NavBar.jsx';

import Home from './Home';
import Register from './Register';
import Logout from './Logout';

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/presents" component={PresentList} />
    <Route path="/info" component={Info} />
    <Route path="/register" component={Register} />
    <Route path="/logout" component={Logout} />
  </div>
);

export default App;
