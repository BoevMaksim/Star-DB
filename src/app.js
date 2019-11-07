import React from 'react';

import Header from './components/header';
import RandomPlanet from './components/random-planet';

import './app.css';

import PeoplePage from "./components/people-page/people-page";

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