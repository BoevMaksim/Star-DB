import React from 'react';

import Header from './components/header';
import RandomPlanet from './components/random-planet';

import './app.css';

import PeoplePage from "./components/people-page/people-page";
import Row from "./components/row";
import ItemDetails, {Info} from "./components/item-details";
import SwapiService from "./services/swapi-service";
import StarschipDetails from "./components/starship-details";

const App = () => {

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = new SwapiService();

    const personDetails = (
        <ItemDetails itemId={11}
                    getData={getPerson}
                    getImagUrl={getPersonImage} >
            <Info field="gender" label="Gender" />
            <Info field="eyeColor" label="Eye Color" />
            <Info field="birthYear" label="Birth Year" />
        </ItemDetails>
    );
    const starshipDetails = (
        <ItemDetails itemId={5}
                    getData={getStarship}
                    getImagUrl={getStarshipImage} >
            <Info field="model" label="Model" />
            <Info field="length" label="Length" />
            <Info field="costInCredits" label="Cost" />
        </ItemDetails>
    );

  return (
    <div>
      <Header />
      <RandomPlanet />
      <PeoplePage />
      <StarschipDetails/>

    </div>
  );
};

export default App;