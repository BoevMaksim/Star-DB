import React from 'react';
import Header from './components/header';
import RandomPlanet from './components/random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage} from './components/pages';
import {
    SwapiServiceProvider
} from './components/swapi-service-context'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './app.css';
import SwapiService from "./services/swapi-service";

const App = () => {

  return (
      <SwapiServiceProvider value={new SwapiService()} >
         <Router>
            <div>
                <Header />
                <RandomPlanet />
                <Switch>
                    <Route path='/' render={ ()=> <h2>Welcome to StarDB</h2> } exact />

                    <Route path='/people/:id?' component={PeoplePage} />

                    <Route path='/planets/:id?' component={PlanetsPage} />

                    <Route path='/starships/:id?' component={StarshipsPage} />

                    <Route render={ ()=> <h2>Page not found</h2>} />
                </Switch>
            </div>
          </Router>
      </SwapiServiceProvider>
  );
};

export default App;