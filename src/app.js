// Sample component
// which will use the Apollo React
// Component

// Import react libraries
import React, {Component} from 'react';

// Import Apollo Wrapper
import {withApollo} from './apollo/index';

// Component
class App extends Component {
    // Constructor
    constructor(props) {
        super(props);

        // State
        this.state = {};
    }

    async componentDidMount() {
        // Component mounted
        // Use Apollo to see if we are
        // authenticated or not
        var res = await this.props.apolloProject.auth().isAuthenticated();

        // Log response
        console.log(res);
    }

    // Render 
    render() {
       // Return content
        return(
            <h1>Hello World</h1>
        );
    }
}

export default withApollo(App);