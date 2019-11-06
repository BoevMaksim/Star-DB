import React, {useState} from 'react';

import Header from './components/header';
import RandomPlanet from './components/random-planet';
import ItemList from './components/item-list';
import PersonDetails from './components/person-details';

import './app.css';

const App = () => {

    const [selectedPerson, setSelectedPerson] = useState(1);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson}/>
        </div>
      </div>
    </div>
  );
};

export default App;