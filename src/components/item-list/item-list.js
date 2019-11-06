import React, {useState, useEffect} from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

const ItemList = ( {onItemSelected} ) => {

    const swapiService = new SwapiService();

    const [peopleList, setPeopleList] = useState(null);

    useEffect( () => {
        swapiService
            .getAllPeople()
            .then( (peoplelist) => {
                setPeopleList(peoplelist);
            });
    }, []);

    if (!peopleList) {
        return <Spinner/>
    };

    const renderItems = (arr) => {
        return arr.map(( {id, name} ) => {
            return (
                <li className='list-group-item'
                    key={id}
                    onClick={() => onItemSelected(id)} >
                    {name}
                </li>
            );
        })
    };

    const items = renderItems(peopleList);

    return (
      <ul className="item-list list-group">
          {items}
      </ul>
    );
};

export default ItemList;
