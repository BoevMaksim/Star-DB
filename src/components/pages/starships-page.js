import React from 'react';
import {StarshipLists, StarshipDetails} from "../sw-components";
import {withRouter} from 'react-router-dom';
import Row from "../row";

const StarshipsPage = ( {history, match} ) => {

   /*
    ***Used page id instead of useState with withRouter***
    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };*/

   const {id} = match.params;

   return (
       <div>
           <h2>Starships</h2>
           <Row left={<StarshipLists onItemSelected={(id) => history.push(id)} />}
                right={<StarshipDetails itemId={id} />}/>
       </div>
   );
};

export default withRouter(StarshipsPage);