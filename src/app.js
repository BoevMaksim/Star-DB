import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import PeoplePage from "./components/people-page/people-page";
import {
    PersonLists,
    PlanetLists,
    StarshipLists,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from './components/sw-components/index';

import './app.css';

const App = () => {

  return (
    <div>
      <Header />
      <RandomPlanet />
      <PeoplePage/>
      <PersonDetails itemId={11} />
      <PlanetDetails itemId={5} />
      <StarshipDetails itemId={5} />

      <PersonLists />

      <PlanetLists />

      <StarshipLists />

    </div>
  );
};

export default App;