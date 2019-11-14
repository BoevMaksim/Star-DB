import React from "react";
import WithData from "../hoc";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
        <Wrapped {...props}>
            {fn}
        </Wrapped>
        )
    };
};

const renderName = ({name}) => <span>{name}</span>;

const ListWithChildren = WithChildFunction(ItemList, renderName);

const PersonLists = WithData(ListWithChildren, getAllPeople);
const PlanetLists = WithData(ListWithChildren, getAllPlanets);
const StarshipLists = WithData(ListWithChildren, getAllStarships);

export {
    PersonLists,
    PlanetLists,
    StarshipLists
};