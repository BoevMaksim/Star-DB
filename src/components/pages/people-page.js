import React from 'react';
import {PersonLists, PersonDetails} from "../sw-components";
import {withRouter} from 'react-router-dom';
import Row from "../row";

const PeoplePage = ( {history, match} ) => {

    /*
        ***Used page id instead of useState with withRouter***
    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    };*/

   const {id} = match.params;

   return (
        <Row left={<PersonLists onItemSelected={(id) => history.push(id)} />}
             right={<PersonDetails itemId={id} />}/>
   );
};

export default withRouter(PeoplePage);