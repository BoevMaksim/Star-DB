import React, {useState, useEffect} from 'react';

import './item-details.css';

const Info = ({ item, field, label }) => {

    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export { Info };

const ItemDetails = ( {itemId, getData, getImagUrl, children} ) => {

    const [item, setItem] = useState(null);
    const [imag, setImag] = useState(null);

    const updatePerson = () => {

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                setItem(item);
                setImag(getImagUrl(itemId));
            });
    };

    useEffect(() => {updatePerson()}, [itemId]);

    if (!item) {
        return <span>Select a person from a list</span>
    };

    return (
      <div className="person-details card">
        <img className="person-image"
          src={imag}   alt='text'/>
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
           { React.Children.map( children, (child) => {
               return React.cloneElement(child, {item})
           })
           }
          </ul>
        </div>
      </div>
    );
};

export default ItemDetails;