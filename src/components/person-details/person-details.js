import React, {useState, useEffect} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";

const PersonDetails = ( {personId} ) => {

    const swapiSevice = new SwapiService();

    const [person, setPerson] = useState(null);

    const updatePerson = () => {

        if (!personId) {
            return;
        }

        swapiSevice
                .getPerson(personId)
                .then((person) => {setPerson(person)});
    };

    useEffect(() => {updatePerson()}, [personId]);

    if (!person) {
        return <span>Select a person from a list</span>
    };

    const {id, name, gender, birthYear, eyeColor } = person;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}   alt='text'/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">{birthYear}</span>
              <span>43</span>
            </li>
            <li className="list-group-item">
              <span className="term">{eyeColor}</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default PersonDetails;