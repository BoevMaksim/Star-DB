import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import PeoplePage from "./components/people-page/people-page";

import './app.css';

const App = () => {

  return (
    <div>
      <Header />
      <RandomPlanet />
      <PeoplePage />
    </div>
  );
};

export default App;