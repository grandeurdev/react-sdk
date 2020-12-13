// We will Create a Context for the Grandeur
// through which the data will be shared 
// in the class. The Provider and the Consumer
// components returned by this class will be
// further used to develop Grandeur component and
// Grandeur Wrapper.

// Libraries
import React from 'react';

// Develop a Context
const GrandeurContext = React.createContext(null);

// Export the Context
export default GrandeurContext;