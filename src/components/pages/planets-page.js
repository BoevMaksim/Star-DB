import React from 'react';
import {PlanetLists, PlanetDetails} from '../sw-components';
import {withRouter} from 'react-router-dom';
import Row from '../row';

const PlanetsPage = ( {history, match} ) => {

   /*
       ***Used page id instead of useState with withRouter***
   const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };*/

   const {id} = match.params;

   return (
       <div>
           <h2>Planets</h2>
           <Row left={<PlanetLists onItemSelected={(id) => history.push(id)} />}
                right={<PlanetDetails itemId={id} />}/>
       </div>
   );
};

export default withRouter(PlanetsPage);