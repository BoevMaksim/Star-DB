import React, {useState, useEffect} from 'react';

import './item-list.css';

import Spinner from "../spinner";

const ItemList = ( {onItemSelected, getData, renderItem} ) => {

    const [itemList, setItemList] = useState(null);

    useEffect( () => {
        getData
            .then( (peoplelist) => {
                setItemList(peoplelist);
            });
    }, []);

    if (!itemList) {
        return <Spinner/>
    };

    const renderItems = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item);

            return (
                <li className='list-group-item'
                    key={id}
                    onClick={() => onItemSelected(id)} >
                    {label}
                </li>
            );
        })
    };

    const items = renderItems(itemList);

    return (
      <ul className="item-list list-group">
          {items}
      </ul>
    );
};

export default ItemList;
