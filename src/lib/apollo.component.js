// Apollo Component is the most important
// part of the Grandeur Cloud SDK for react. It provides
// and interface with which the app could get access
// to the Apollo Object in the entire Application.
// All you have to do is to wrap the main component
// of the application into the component exported 
// through this file

// How it Works
// We use React Context to build an application context
// which return two Components; Provider and Consumer
// To make the context accessible in a child it is
// compulsory to wrap the parent in the provider.
// Provider is where we actually intialize our context.
// We generally wrap the top most node of the app so that
// context could be made available all over the app.
// Then to access the context in a component, the 
// consumer component is required to be utilized which
// returns a function with args as the context. 
// To make it look cleaner. We have developed a new
// component around the Provider and a HOC around the
// wrapper. The main apollo component is implemented 
// in this file.

// Imports
import React, {Component} from 'react';
import ApolloContext from './apollo.context';
import {init} from '@grandeurcloud/apollo';

// Default Apollo Provider Component
class ApolloComponent extends Component {
    // Constructor
    constructor(props) {
        super(props);

        // State
        this.state = {
            apiKey: null,
            accessKey: null,
            accessToken: null
        };
    }

    // Get the Props
    static getDerivedStateFromProps(props, State) {
        var accessKey = null;
        var accessToken = null;

        // Check if accessCredential provided
        if (props.accessCredential) {
            // Get Access Key and Token
            accessKey = props.accessCredential.accessKey
            accessToken = props.accessCredential.accessToken
        }

        return{
            apiKey: props.apiKey,
            accessKey: accessKey,
            accessToken: accessToken
        }
    }

    // Render 
    render() {
        // Wrap the childerns into the Provider and inti the
        // context with data that we wanted to made available all
        // over the app
        return(
            <ApolloContext.Provider value={init(this.state.apiKey, this.state.accessKey, this.state.accessToken)} >
                {this.props.children}
            </ApolloContext.Provider>
        );
    }
}

export default ApolloComponent;
