import React, {useState, useEffect} from 'react';

import SwapiService from "../../services/swapi-service";

import './random-planet.css';

const RandomPlanet = () => {

    const swapiService = new SwapiService();

    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [population, setPopulation] = useState(null);
    const [rotationPeriod, setRotationPeriod] = useState(null);
    const [diameter, setDiameter] = useState(null);

    const updatePlanet = (id) => {
        swapiService
            .getPlanet(id)
            .then((planet) => {
                setId(id);
                setName(planet.name);
                setDiameter(planet.diameter);
                setPopulation(planet.population);
                setRotationPeriod(planet.rotation_period);
            });
    };

    useEffect(() => {
        const id = Math.floor(Math.random()*19)+1;
        updatePlanet(id);
    },[]);

    return (
      <div className="random-planet jumbotron rounded">
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
      </div>

    );
};

export default RandomPlanet;
