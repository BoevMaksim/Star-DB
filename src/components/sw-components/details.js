import React from 'react';
import ItemDetails, {Info} from '../item-details';
import {SwapiServiceConsumer} from '../swapi-service-context';

const PersonDetails = ( {itemId} ) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getPerson}
                                     getImagUrl={getPersonImage} >
                            <Info field="gender" label="Gender" />
                            <Info field="eyeColor" label="Eye Color" />
                            <Info field="birthYear" label="Birth Year" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};
const PlanetDetails = ( {itemId} ) => {
    return (
        <SwapiServiceConsumer>
            {
                ( {getPlanet, getPlanetImage} ) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getPlanet}
                                     getImagUrl={getPlanetImage} >
                            <Info field="population" label="Population" />
                            <Info field="rotationPeriod" label="Rotation Period" />
                            <Info field="diameter" label="Diameter" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};
const StarshipDetails = ( {itemId} ) => {
    return (
        <SwapiServiceConsumer>
            {
                ( {getStarship, getStarshipImage} ) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getStarship}
                                     getImagUrl={getStarshipImage} >
                            <Info field='model' label='Model' />
                            <Info field='length' label='Length' />
                            <Info field='crew' label='Crew' />
                            <Info field='manufacturer' label='Manufacturer' />
                            <Info field='passengers' label='Passengers' />
                            <Info field='cargoCapacity' label='Cargo capacity' />
                            <Info field='costInCredits' label='Cost' />

                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );

};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};