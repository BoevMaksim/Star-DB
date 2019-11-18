import React, {useState} from 'react';
import {PlanetLists, PlanetDetails} from "../sw-components";
import Row from "../row";

const PlanetsPage = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    return (
        <Row left={<PlanetLists onItemSelected={onPersonSelected} />}
             right={<PlanetDetails itemId={selectedPerson} />}/>
    );
};

export default PlanetsPage;