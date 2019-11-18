import React, {useState} from 'react';
import {StarshipLists, StarshipDetails} from "../sw-components";
import Row from "../row";

const StarshipsPage = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };

    return (
        <Row left={<StarshipLists onItemSelected={onPersonSelected} />}
             right={<StarshipDetails itemId={selectedPerson} />}/>
    );
};

export default StarshipsPage;