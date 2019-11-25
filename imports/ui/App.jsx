import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Info from './Info.jsx';
import PresentList from './PresentList.jsx';
import NavBar from './NavBar.jsx';

import Home from './Home';
import Register from './Register';
import Logout from './Logout';
import NotFound from './NotFound';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/presents" component={PresentList} />
      <Route path="/info" component={Info} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
