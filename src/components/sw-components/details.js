import React from 'react';
import ItemDetails, {Info} from "../item-details";
import SwapiService from "../../services/swapi-service";

const { getPerson,
        getPlanet,
        getStarship,
        getPersonImage,
        getPlanetImage,
        getStarshipImage,
        } = new SwapiService();

const PersonDetails = ( {itemId} ) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImagUrl={getPersonImage} >
            <Info field="gender" label="Gender" />
            <Info field="eyeColor" label="Eye Color" />
            <Info field="birthYear" label="Birth Year" />
        </ItemDetails>
    );
};
const PlanetDetails = ( {itemId} ) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImagUrl={getPlanetImage} >
            <Info field="population" label="Population" />
            <Info field="rotationPeriod" label="Rotation Period" />
            <Info field="diameter" label="Diameter" />
        </ItemDetails>
    );
};
const StarshipDetails = ( {itemId} ) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImagUrl={getStarshipImage} >
            <Info field="model" label="Model" />
            <Info field="length" label="Length" />
            <Info field="costInCredits" label="Cost" />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};