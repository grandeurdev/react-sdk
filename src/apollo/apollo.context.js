// We will Create a Context for the Apollo
// through which the data will be shared 
// in the class. The Provider and the Consumer
// components returned by this class will be
// further used to develop Apollo component and
// Apollo Wrapper.

// Libraries
import React from 'react';

// Develop a Context
const ApolloContext = React.createContext(null);

// Export the Context
export default ApolloContext;