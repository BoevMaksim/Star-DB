import React, {useState} from 'react';

import Row from "../row";
import {PersonDetails, PersonLists} from "../sw-components";

import './people-page.css';

const PeoplePage = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    const itemList = (
        <PersonLists onItemSelected={onPersonSelected}>
            { ({name}) => <span>{name}</span> }
        </PersonLists>
    );

    const personDetails = (
        <PersonDetails itemId={selectedPerson} />
    );

    return (
        <Row left={itemList} right={personDetails}/>
    );

};

export default PeoplePage;