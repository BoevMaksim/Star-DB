import React, {useState, useEffect} from 'react';

import SwapiService from "../../services/swapi-service";

import './random-planet.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const RandomPlanet = () => {

    const swapiService = new SwapiService();

    const [planet, setPlanet] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onPlanetLoaded = (planet) => {
        setPlanet(planet);
        setLoading(false);
    };

    const onError = ()=> {
        setError(true);
        setLoading(false);
    };

    const updatePlanet = (id) => {
        swapiService
            .getPlanet(id)
            .then(onPlanetLoaded)
            .catch(onError);
    };

    useEffect(() => {
        const id = Math.floor(Math.random()*19)+1;
        updatePlanet(id);
    },[]);

    const hasData = !(loading || error);
    const errorMessag = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
          {errorMessag}
          {spinner}
          {content}
      </div>
    );
};

const PlanetView = ( {planet} ) => {

    const {id, name, diameter, population, rotationPeriod} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt='text' />
            <div>
            <h4> {name} </h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span> {population} </span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span> {rotationPeriod} </span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span> {diameter} </span>
                </li>
            </ul>
        </div>
         </React.Fragment>
    );
};

export default RandomPlanet;
