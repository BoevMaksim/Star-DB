import React, {useState} from 'react';

import './starschip-details.css'
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetails, {Info} from "../item-details";
import Row from "../row";

const StarschipDetails = () => {

    const {getStarship, getStarshipImage, getAllStarships} = new SwapiService();

    const [selectedStarship, setSelectedStarship] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedStarship(id);
    };

    const itemList = (
        <ItemList onItemSelected={onPersonSelected}
                  getData={getAllStarships()}
                  renderItem={( i ) => `${i.name}`} />
    );

    const starshipDetails = (
        <ItemDetails itemId={selectedStarship}
                     getData={getStarship}
                     getImagUrl={getStarshipImage} >
            <Info field="model" label="Model" />
            <Info field="length" label="Length" />
            <Info field="costInCredits" label="Cost" />
        </ItemDetails>
    );

    return (
        <Row left={itemList} right={starshipDetails}/>
    );
};

export default StarschipDetails;