import WithData from "../hoc";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";

const { getAllPeople, getAllStarships, getAllPlanets } = new SwapiService();

const PersonLists = WithData(ItemList, getAllPeople);
const PlanetLists = WithData(ItemList, getAllPlanets);
const StarshipLists = WithData(ItemList, getAllStarships);

export {
    PersonLists,
    PlanetLists,
    StarshipLists
};