import React, {useState} from 'react';
import ItemList from "../item-list";
import ItemDetails, {Info} from "../item-details";
import Row from "../row";

import './people-page.css';
import SwapiService from "../../services/swapi-service";

const PeoplePage = () => {

    const {getPerson, getPersonImage, getAllPeople} = new SwapiService();

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <ItemList onItemSelected={onPersonSelected}
                  getData={getAllPeople()}
                  renderItem={( i ) => `${i.name} `} />
    );

    const personDetails = (
        <ItemDetails itemId={selectedPerson}
                     getData={getPerson}
                     getImagUrl={getPersonImage} >
            <Info field="gender" label="Gender" />
            <Info field="eyeColor" label="Eye Color" />
            <Info field="birthYear" label="Birth Year" />
        </ItemDetails>
    );

    return (
        <Row left={itemList} right={personDetails}/>
    );

};

export default PeoplePage;