import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage} from './components/pages';
import {
    SwapiServiceProvider
} from './components/swapi-service-context'
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app.css';
import SwapiService from "./services/swapi-service";

const App = () => {

  return (
      <SwapiServiceProvider value={new SwapiService()} >
         <Router>
            <div>
                <Header />
                <RandomPlanet />

                <Route path='/' render={ ()=> <h2>Welcome to StarDB</h2> } exact />

                <Route path='/people' render={ ()=> <h2>People</h2> } exact />
                <Route path='/people/:id?' component={PeoplePage} />

                <Route path='/planets' render={ ()=> <h2>Planets</h2> } exact />
                <Route path='/planets/:id?' component={PlanetsPage} />

                <Route path='/starships' render={ ()=> <h2>Starships</h2> } exact />
                <Route path='/starships/:id?' component={StarshipsPage} />
            </div>
          </Router>
      </SwapiServiceProvider>
  );
};

export default App;