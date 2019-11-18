import React, {useState} from 'react';
import {PersonLists, PersonDetails} from "../sw-components";
import Row from "../row";

const PeoplePage = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    return (
        <Row left={<PersonLists onItemSelected={onPersonSelected} />}
             right={<PersonDetails itemId={selectedPerson} />}/>
    );
};

export default PeoplePage;