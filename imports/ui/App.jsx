import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import PresentList from './PresentList.jsx';

const App = () => (
  <div>
    <h1>Cadeaux de Noël 2019</h1>
    <PresentList />
    <Hello />
    <Info />
  </div>
);

export default App;
