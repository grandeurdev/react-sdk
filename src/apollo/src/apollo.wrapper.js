// Fist we setup the context using the Provider object
// but then in order to access the data, it is compulsory
// to use the Consumer Component which was returned when we
// build the context in the application. But handling it is 
// generally clumpsy and to make it look clean we have 
// developed a HOC around it. So in order to make a context
// accessible, just wrap the component with HOC that we will
// return in this file before exporting.

import React from 'react';
import ApolloContext from './apollo.context';

// Default Wrapper for Components
// where the context is required
const withApollo = (Component) => (props)=> (
    <ApolloContext.Consumer>
        {apolloProject => <Component {...props} apolloProject={apolloProject} />}
    </ApolloContext.Consumer>
);

export default withApollo;