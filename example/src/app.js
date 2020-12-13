// The Code Component
// This component will be required to show code
// in Dashboard

// Libraries
import React, { Component } from 'react';

// Import Grandeur HOC
import {withGrandeur} from 'grandeur-react';

// Component
class App extends Component {

    // Constructor
    constructor(props) {
        super(props);

        // State of the Component
        this.state = {};
    }

    componentDidMount() {
        // Component is Mounted
        console.log(this.props);
    }
    
    // Render
    render() { 
        // Render the Component
        return <p>Hello World</p>;
    }
}

// Export the Component
export default withGrandeur(App);