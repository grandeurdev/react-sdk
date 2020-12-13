// Fist we setup the context using the Provider object
// but then in order to access the data, it is compulsory
// to use the Consumer Component which was returned when we
// build the context in the application. But handling it is 
// generally clumpsy and to make it look clean we have 
// developed a HOC around it. So in order to make a context
// accessible, just wrap the component with HOC that we will
// return in this file before exporting.

import React from 'react';
import GrandeurContext from './grandeur.context';

// Default Wrapper for Components
// where the context is required
const withGrandeur = (Component) => (props)=> (
    <GrandeurContext.Consumer>
        {grandeur => <Component {...props} grandeur={grandeur} />}
    </GrandeurContext.Consumer>
);

export default withGrandeur;