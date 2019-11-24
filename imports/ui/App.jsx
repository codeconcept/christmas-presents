import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import PresentList from './PresentList.jsx';
import NavBar from './NavBar.js';

const App = () => (
  <div>
    <h1>Cadeaux de Noël 2019</h1>
    <NavBar />
    <PresentList />
    <Hello />
    <Info />
  </div>
);

export default App;
