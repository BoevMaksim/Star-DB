import React, { useState, useEffect } from 'react';
import Spinner from "../spinner";

const WithData = (View, getData) => {
    const WithStateComponent = (props) => {

        const [data, setData] = useState(null);

        useEffect( () => {
            getData()
                .then( (data) => {
                    setData(data);
                });
        }, []);

        if (!data) {
            return <Spinner/>
        }

        return <View {...props} data={data} />;
    };
    return WithStateComponent;
};

export default WithData;

